import * as bcrypt from 'bcryptjs';
import { IPasswordManager } from './IPasswordManager';

export class PasswordManager implements IPasswordManager {
  private readonly bcrypt = bcrypt;

  public async isValid(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return this.bcrypt.compare(password, hashedPassword);
  }

  public async hashPassword(password: string): Promise<string> {
    return this.bcrypt.hash(password, 10);
  }
}
