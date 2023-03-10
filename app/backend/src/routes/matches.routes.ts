import { Router } from 'express';
import { findAllMatchesController } from '../modules/matches/useCases/findAllMatches';
import 'express-async-errors';

const matchesRouter = Router();

// can receive a query string called inProgress with values: true | false
matchesRouter.get('/matches', findAllMatchesController.handle);

export { matchesRouter };
