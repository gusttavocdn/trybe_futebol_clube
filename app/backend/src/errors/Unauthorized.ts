import { AppError } from './AppError';

export class Unauthorized extends AppError {
  public statusCode = 401;

  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }
}
