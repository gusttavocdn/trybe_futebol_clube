import TeamModel from '../../database/models/TeamModel';
import MatchModel from '../../database/models/MatchModel';
import { Match } from '../../entities';
import {
  IMatchesRepository,
  ScoreboardOptions,
} from '../contracts/IMatchesRepository';
import BaseRepository from './BaseRepository';
import { IMatchDTO } from '../../modules/matches/dtos/IMatchDTO';
import { leaderboardQuery } from '../helpers/rawQueries';
import { IScoreboardDTO } from '../../modules/matches/dtos/IScoreboardDTO';

const includeOptions = [
  {
    model: TeamModel,
    as: 'teamHome',
    attributes: ['teamName'],
  },
  {
    model: TeamModel,
    as: 'teamAway',
    attributes: ['teamName'],
  },
];

export class MatchesRepository
  extends BaseRepository<MatchModel, Match>
  implements IMatchesRepository {
  public async findAll(): Promise<IMatchDTO[]> {
    const matches = await this.model.findAll({
      include: includeOptions,
    });

    return matches as unknown as IMatchDTO[];
  }

  public async findById(id: number): Promise<IMatchDTO | null> {
    const match = await this.model.findByPk(id, {
      include: includeOptions,
    });

    if (!match) return null;

    return match as unknown as IMatchDTO;
  }

  public findInProgress = async (): Promise<IMatchDTO[]> => {
    const matches = await this.model.scope('inProgress').findAll({
      include: includeOptions,
    });

    return matches as unknown as IMatchDTO[];
  };

  public findNotInProgress = async (): Promise<IMatchDTO[]> => {
    const matches = await this.model.scope('notInProgress').findAll({
      include: includeOptions,
    });

    return matches as unknown as IMatchDTO[];
  };

  public async finishMatch(id: number): Promise<boolean> {
    const [rowsAffected] = await this.model.update(
      { inProgress: false },
      {
        where: { id },
      },
    );

    return rowsAffected === 1;
  }

  public async getScoreboard(
    homeTeam: ScoreboardOptions,
    awayTeam: ScoreboardOptions,
  ): Promise<IScoreboardDTO[]> {
    const [scoreboard] = (await this.model.sequelize?.query(
      leaderboardQuery(homeTeam, awayTeam),
    )) as [IScoreboardDTO[], unknown];

    return scoreboard;
  }
}
