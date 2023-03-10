import * as jwt from 'jsonwebtoken';
import { ITokenManager, IUserCredentials } from './ITokenManager';

const SECRET_KEY = process.env.JWT_SECRET || 'secret';

export class TokenManager implements ITokenManager {
  private _jwt: typeof jwt;
  private _config: jwt.SignOptions;

  constructor() {
    this._config = { expiresIn: '1h', algorithm: 'HS256' };
  }

  public generate = async (payload: IUserCredentials): Promise<string> => {
    const token = jwt.sign({ data: payload }, SECRET_KEY, this._config);
    return token;
  };

  public async verify(token: string): Promise<IUserCredentials> {
    const { data } = this._jwt.verify(token, SECRET_KEY, this._config) as {
      data: IUserCredentials;
    };

    return data;
  }
}
