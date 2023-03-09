import UsersRepository from '../../../../repositories/implementations/UsersRepository';
import UserModel from '../../../../database/models/UserModel';
import SignInService from './SignInService';
import SignInController from './SignInController';
import { PasswordCompare, SignInValidator } from '../../../../providers';

const usersRepository = new UsersRepository(UserModel);
const passwordCompare = new PasswordCompare();
const signInService = new SignInService(usersRepository, passwordCompare);
const requestValidator = new SignInValidator();
const signInController = new SignInController(signInService, requestValidator);

export { signInController };
