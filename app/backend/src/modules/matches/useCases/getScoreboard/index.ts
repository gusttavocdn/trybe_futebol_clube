import MatchModel from '../../../../database/models/MatchModel';
import { MatchesRepository } from '../../../../repositories/implementations/MatchesRepository';
import { GetScoreboardController } from './GetScoreboardController';
import { GetScoreboardService } from './GetScoreboardService';

const matchesRepository = new MatchesRepository(MatchModel);
const getScoreboardService = new GetScoreboardService(matchesRepository);
const getScoreboardController = new GetScoreboardController(
  getScoreboardService,
);

export { getScoreboardController };
