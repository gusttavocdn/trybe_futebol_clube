export interface IPasswordManager {
  isValid(password: string, hashedPassword: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}
