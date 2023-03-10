import TeamModel from '../../database/models/TeamModel';
import { Team } from '../../entities/Team';
import { ITeamsRepository } from '../contracts/ITeamsRepository';
import BaseRepository from './BaseRepository';

export class TeamsRepository
  extends BaseRepository<TeamModel, Team>
  implements ITeamsRepository {}
