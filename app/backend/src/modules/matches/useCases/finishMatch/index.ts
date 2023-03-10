import MatchModel from '../../../../database/models/MatchModel';
import { MatchesRepository } from '../../../../repositories/implementations/MatchesRepository';
import { FinishMatchController } from './FinishMatchController';
import { FinishMatchService } from './FinishMatchService';

const matchesRepository = new MatchesRepository(MatchModel);
const finishMatchService = new FinishMatchService(matchesRepository);
const finishMatchController = new FinishMatchController(finishMatchService);

export { finishMatchController };
