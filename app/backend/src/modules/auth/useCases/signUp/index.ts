import UsersRepository from '../../../../repositories/implementations/UsersRepository';
import UserModel from '../../../../database/models/UserModel';
import {
  PasswordManager,
  SignUpValidator,
  TokenManager,
} from '../../../../providers';
import { SignUpService } from './SignUpService';
import SignUpController from './SignUpController';

const usersRepository = new UsersRepository(UserModel);
const passwordManager = new PasswordManager();
const tokenManager = new TokenManager();
const signInService = new SignUpService(
  usersRepository,
  passwordManager,
  tokenManager,
);

const requestValidator = new SignUpValidator();
const signUpController = new SignUpController(signInService, requestValidator);

export { signUpController };
