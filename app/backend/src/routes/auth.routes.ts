import { Router } from 'express';
import { signInController } from '../modules/auth/useCases/signIn';
import { signUpController } from '../modules/auth/useCases/signUp';
import { validateController } from '../modules/auth/useCases/validate';
import 'express-async-errors';
import { authToken } from '../middlewares/authToken';

const authRouter = Router();

authRouter.post('/login', signInController.handle);
authRouter.post('/signup', signUpController.handle);
authRouter.get('/login/validate', authToken, validateController.handle);

export { authRouter };
