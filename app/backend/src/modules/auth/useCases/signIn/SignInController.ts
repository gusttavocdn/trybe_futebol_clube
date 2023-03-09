import { Request, Response } from 'express';
import SignInService from './SignInService';

export default class SignInController {
  constructor(private readonly _service: SignInService) {}

  public handle = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await this._service.execute({ email, password });
    res.status(200).json({ token });
  };
}
