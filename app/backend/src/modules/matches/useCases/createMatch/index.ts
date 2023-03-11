import MatchModel from '../../../../database/models/MatchModel';
import TeamModel from '../../../../database/models/TeamModel';
import { MatchesRepository } from '../../../../repositories/implementations/MatchesRepository';
import { TeamsRepository } from '../../../../repositories/implementations/TeamsRepository';
import { CreateMatchRequestValidator } from '../../../../providers';
import { CreateMatchController } from './CreateMatchController';
import { CreateMatchService } from './CreateMatchService';

const matchesRepository = new MatchesRepository(MatchModel);
const teamsRepository = new TeamsRepository(TeamModel);

const createMatchService = new CreateMatchService(
  matchesRepository,
  teamsRepository,
);

const requestValidator = new CreateMatchRequestValidator();
const createMatchController = new CreateMatchController(
  createMatchService,
  requestValidator,
);

export { createMatchController };
