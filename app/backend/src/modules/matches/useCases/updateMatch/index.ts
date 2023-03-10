import { UpdateMatchRequestValidator } from '../../../../providers';
import MatchModel from '../../../../database/models/MatchModel';
import { MatchesRepository } from '../../../../repositories/implementations/MatchesRepository';
import { UpdateMatchController } from './UpdateMatchController';
import { UpdateMatchService } from './UpdateMatchService';

const matchesRepository = new MatchesRepository(MatchModel);
const updateMatchService = new UpdateMatchService(matchesRepository);
const requestValidator = new UpdateMatchRequestValidator();
const updateMatchController = new UpdateMatchController(
  updateMatchService,
  requestValidator,
);

export { updateMatchController };
