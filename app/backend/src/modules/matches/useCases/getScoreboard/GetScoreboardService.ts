/* eslint-disable max-lines-per-function */
import {
  IMatchesRepository,
  ScoreboardOptions,
} from '../../../../repositories/contracts/IMatchesRepository';
import { IScoreboardDTO } from '../../dtos/IScoreboardDTO';

export class GetScoreboardService {
  constructor(private readonly _repository: IMatchesRepository) {}

  public async execute(
    homeTeam?: ScoreboardOptions,
    awayTeam?: ScoreboardOptions,
  ) {
    if (!homeTeam || !awayTeam) return this.getFullScoreboard();

    const scoreboard = await this._repository.getScoreboard(homeTeam, awayTeam);
    return scoreboard;
  }

  private async getFullScoreboard() {
    const homeTeamsScoreboard = await this._repository.getScoreboard(
      'home_team',
      'away_team',
    );
    const awayTeamsScoreboard = await this._repository.getScoreboard(
      'away_team',
      'home_team',
    );

    const allTeamsScore = [] as IScoreboardDTO[];

    for (let i = 0; i < homeTeamsScoreboard.length; i += 1) {
      const homeTeam = homeTeamsScoreboard[i];
      for (let j = 0; j < awayTeamsScoreboard.length; j += 1) {
        const awayTeam = awayTeamsScoreboard[j];
        if (homeTeam.name === awayTeam.name) {
          allTeamsScore.push(this.calculateTotalScore(homeTeam, awayTeam));
          j = awayTeamsScoreboard.length;
        }
      }
    }

    return allTeamsScore.sort(
      (a, b) =>
        b.totalPoints - a.totalPoints
        || b.goalsBalance - a.goalsBalance
        || b.goalsFavor - a.goalsFavor
        || b.goalsOwn - a.goalsOwn,
    );
  }

  private calculateTotalScore = (
    homeTeam: IScoreboardDTO,
    awayTeam: IScoreboardDTO,
  ): IScoreboardDTO => {
    const totalPoints = Number(homeTeam.totalPoints) + Number(awayTeam.totalPoints);
    const totalGames = Number(homeTeam.totalGames) + Number(awayTeam.totalGames);
    return {
      name: homeTeam.name,
      totalPoints,
      totalGames,
      totalVictories:
        Number(homeTeam.totalVictories) + Number(awayTeam.totalVictories),
      totalDraws: Number(homeTeam.totalDraws) + Number(awayTeam.totalDraws),
      totalLosses: Number(homeTeam.totalLosses) + Number(awayTeam.totalLosses),
      goalsFavor: Number(homeTeam.goalsFavor) + Number(awayTeam.goalsFavor),
      goalsOwn: Number(homeTeam.goalsOwn) + Number(awayTeam.goalsOwn),
      goalsBalance:
        Number(homeTeam.goalsBalance) + Number(awayTeam.goalsBalance),
      efficiency: ((totalPoints / (totalGames * 3)) * 100).toFixed(2),
    };
  };
}
