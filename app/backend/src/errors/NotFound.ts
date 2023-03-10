import { AppError } from './AppError';

export class NotFound extends AppError {
  public statusCode = 404;

  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}
