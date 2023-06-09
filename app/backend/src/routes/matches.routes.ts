import { Router } from 'express';
import { findAllMatchesController } from '../modules/matches/useCases/findAllMatches';
import { authToken } from '../middlewares/authToken';
import { finishMatchController } from '../modules/matches/useCases/finishMatch';
import { updateMatchController } from '../modules/matches/useCases/updateMatch';
import { createMatchController } from '../modules/matches/useCases/createMatch';
import { getScoreboardController } from '../modules/matches/useCases/getScoreboard';
import 'express-async-errors';

const matchesRouter = Router();

matchesRouter.patch(
  '/matches/:id/finish',
  authToken,
  finishMatchController.handle,
);
matchesRouter.patch('/matches/:id', authToken, updateMatchController.handle);
// can receive a query string called inProgress with values: true | false
matchesRouter.get('/matches', findAllMatchesController.handle);
matchesRouter.post('/matches', authToken, createMatchController.handle);

matchesRouter.get('/leaderboard/home', getScoreboardController.handle);
matchesRouter.get('/leaderboard/away', getScoreboardController.handle);
matchesRouter.get('/leaderboard', getScoreboardController.handle);

export { matchesRouter };
