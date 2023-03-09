/* eslint-disable no-case-declarations */
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

function handleErrors(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { name } = error;

  switch (name) {
    case 'ZodError':
      const { message } = (error as ZodError).issues[0];
      return res.status(400).json({ message });
    default:
      return res.status(500).json(error.message);
  }
}
export { handleErrors };
