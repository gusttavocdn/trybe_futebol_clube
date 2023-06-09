import UsersRepository from '../../../../repositories/implementations/UsersRepository';
import UserModel from '../../../../database/models/UserModel';
import SignInService from './SignInService';
import SignInController from './SignInController';
import {
  PasswordManager,
  SignInValidator,
  TokenManager,
} from '../../../../providers';

const usersRepository = new UsersRepository(UserModel);
const passwordCompare = new PasswordManager();
const tokenManager = new TokenManager();
const signInService = new SignInService(
  usersRepository,
  passwordCompare,
  tokenManager,
);

const requestValidator = new SignInValidator();
const signInController = new SignInController(signInService, requestValidator);

export { signInController };
