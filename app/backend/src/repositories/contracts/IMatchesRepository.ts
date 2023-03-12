import { IScoreboardDTO } from '../../modules/matches/dtos/IScoreboardDTO';
import { IMatchDTO } from '../../modules/matches/dtos/IMatchDTO';
import { Match } from '../../entities';
import { IRepository } from './IRepository';

export type ScoreboardOptions = 'home_team' | 'away_team';

export interface IMatchesRepository extends IRepository<Match> {
  findAll(): Promise<IMatchDTO[]>;
  findById(id: number): Promise<IMatchDTO | null>;
  findInProgress(): Promise<IMatchDTO[]>;
  findNotInProgress(): Promise<IMatchDTO[]>;
  finishMatch(id: number): Promise<boolean>;
  getScoreboard(
    homeTeam: ScoreboardOptions,
    awayTeam: ScoreboardOptions
  ): Promise<IScoreboardDTO[]>;
}
