import { Router } from 'express';
import { findAllMatchesController } from '../modules/matches/useCases/findAllMatches';
import 'express-async-errors';
import { authToken } from '../middlewares/authToken';
import { finishMatchController } from '../modules/matches/useCases/finishMatch';
import { updateMatchController } from '../modules/matches/useCases/updateMatch';

const matchesRouter = Router();

matchesRouter.patch(
  '/matches/:id/finish',
  authToken,
  finishMatchController.handle,
);
matchesRouter.patch('/matches/:id', authToken, updateMatchController.handle);
// can receive a query string called inProgress with values: true | false
matchesRouter.get('/matches', findAllMatchesController.handle);

export { matchesRouter };
