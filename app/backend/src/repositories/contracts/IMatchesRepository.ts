import { Match } from '../../entities';
import { IRepository } from './IRepository';

type IMatchDTO = {
  teamHome: {
    teamName: string;
  };
  teamAway: {
    teamName: string;
  };
} & Match;

export interface IMatchesRepository extends IRepository<Match> {
  findAll(): Promise<IMatchDTO[]>;
  findById(id: number): Promise<IMatchDTO | null>;
  findInProgress(): Promise<IMatchDTO[]>;
  findNotInProgress(): Promise<IMatchDTO[]>;
}
