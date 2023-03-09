import UsersRepository from '../../../../repositories/implementations/UsersRepository';
import UserModel from '../../../../database/models/UserModel';
import SignInService from './SignInService';
import SignInController from './SignInController';

const usersRepository = new UsersRepository(UserModel);
const signInService = new SignInService(usersRepository);
const signInController = new SignInController(signInService);

export { signInController };
