/* eslint-disable no-case-declarations */
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors';

function handleErrors(
  error: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { name } = error;

  switch (name) {
    case 'ZodError':
      const { message } = (error as unknown as ZodError).issues[0];
      return res.status(400).json({ message });
    case 'NotFoundError':
      return res.status(error.statusCode).json({ message: error.message });
    case 'UnauthorizedError':
      return res.status(error.statusCode).json({ message: error.message });
    default:
      return res.status(500).json(error.message);
  }
}

export { handleErrors };
