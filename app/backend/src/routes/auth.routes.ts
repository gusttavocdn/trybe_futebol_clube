import { Router } from 'express';
import { signInController } from '../modules/auth/useCases/signIn';
import { signUpController } from '../modules/auth/useCases/signUp';
import 'express-async-errors';

const authRouter = Router();

authRouter.post('/login', signInController.handle);
authRouter.post('/signup', signUpController.handle);

export { authRouter };
