/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';

export class ValidateController {
  public async handle(req: Request, res: Response) {
    const { role } = req.user;
    return res.status(200).json({ role });
  }
}
