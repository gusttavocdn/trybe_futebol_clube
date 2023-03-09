import { Router } from 'express';
import { signInController } from '../modules/auth/useCases/signIn';
import 'express-async-errors';

const authRouter = Router();

authRouter.post('/login', signInController.handle);

export { authRouter };
