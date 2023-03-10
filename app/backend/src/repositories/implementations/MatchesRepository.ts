import TeamModel from '../../database/models/TeamModel';
import MatchModel from '../../database/models/MatchModel';
import { Match } from '../../entities';
import { IMatchesRepository } from '../contracts/IMatchesRepository';
import BaseRepository from './BaseRepository';

type IMatchDTO = {
  teamHome: {
    teamName: string;
  };
  teamAway: {
    teamName: string;
  };
} & Match;

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
}
