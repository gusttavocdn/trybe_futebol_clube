import * as bcrypt from 'bcryptjs';
import { IPasswordCompare } from './IPasswordCompare';

export class PasswordCompare implements IPasswordCompare {
  private readonly bcrypt = bcrypt;

  public async isValid(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return this.bcrypt.compare(password, hashedPassword);
  }
}
