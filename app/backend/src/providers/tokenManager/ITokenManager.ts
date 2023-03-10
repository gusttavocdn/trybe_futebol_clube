export type IUserCredentials = {
  email: string;
  role: string;
};

export interface ITokenManager {
  generate(payload: IUserCredentials): Promise<string>;
  verify(token: string): Promise<IUserCredentials>;
}
