export interface IPasswordCompare {
  isValid(password: string, hashedPassword: string): Promise<boolean>;
}
