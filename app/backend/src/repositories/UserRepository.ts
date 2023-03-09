import UserModel from '../database/models/User';
import BaseRepository from './BaseRepository';

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
};

export default class UserRepository extends BaseRepository<UserModel, User> {}
