import MatchModel from '../../../../database/models/MatchModel';
import { MatchesRepository } from '../../../../repositories/implementations/MatchesRepository';
import { FindAllMatchesController } from './FindAllMatchesController';
import { FindAllMatchesService } from './FindAllMatchesService';

const matchesRepository = new MatchesRepository(MatchModel);
const findAllMatchesService = new FindAllMatchesService(matchesRepository);
const findAllMatchesController = new FindAllMatchesController(
  findAllMatchesService,
);

export { findAllMatchesController };
