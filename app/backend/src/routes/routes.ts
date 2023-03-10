import { Application } from 'express';
import { authRouter } from './auth.routes';
import { matchesRouter } from './matches.routes';
import { teamsRouter } from './teams.routes';

export function routes(app: Application) {
  app.use(authRouter);
  app.use(teamsRouter);
  app.use(matchesRouter);
}
