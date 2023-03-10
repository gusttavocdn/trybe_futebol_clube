import { Request, Response, NextFunction } from 'express';
import { TokenManager } from '../providers';

async function authToken(req: Request, _res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) throw new Error('Token not found');

  const tokenManager = new TokenManager();
  const data = await tokenManager.verify(token);
  req.user = data;

  next();
}

export { authToken };
