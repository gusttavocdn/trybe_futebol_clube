import { IUsersRepository } from '../contracts/IUsersRepository';
import UserModel from '../../database/models/UserModel';
import BaseRepository from './BaseRepository';
import { User } from '../../entities';

export default class UsersRepository
  extends BaseRepository<UserModel, User>
  implements IUsersRepository {
  public async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.model.findOne({ where: { email } });

    if (!user) return null;

    return user;
  }
}
