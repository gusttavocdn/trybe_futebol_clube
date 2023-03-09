import UsersRepository from '../../../../repositories/implementations/UsersRepository';
import UserModel from '../../../../database/models/UserModel';
import SignInService from './SignInService';
import SignInController from './SignInController';
import { SignInValidator } from '../../../../providers';

const usersRepository = new UsersRepository(UserModel);
const signInService = new SignInService(usersRepository);
const requestValidator = new SignInValidator();
const signInController = new SignInController(signInService, requestValidator);

export { signInController };
