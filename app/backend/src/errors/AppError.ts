export class AppError extends Error {
  public statusCode = 500;

  constructor(message: string) {
    super(message);
    this.name = 'AppError';
  }
}
