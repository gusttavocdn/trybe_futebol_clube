import { User } from '../../entities';
import { IRepository } from './IRepository';

export interface IFindUserByEmailRepository {
  findUserByEmail(email: string): Promise<User | null>;
}

export interface IUsersRepository
  extends IRepository<User>,
  IFindUserByEmailRepository {}
