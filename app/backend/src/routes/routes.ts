import { Application } from 'express';
import { authRouter } from './auth.routes';

export function routes(app: Application) {
  app.use(authRouter);
}
