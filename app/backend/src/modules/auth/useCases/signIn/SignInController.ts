import { Request, Response } from 'express';
import { IRequestValidator } from '../../../../providers';
import SignInService from './SignInService';

export default class SignInController {
  constructor(
    private readonly _service: SignInService,
    private readonly _validator: IRequestValidator,
  ) {}

  public handle = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    console.log('password =>', password);
    await this._validator.validate({ email, password });
    const token = await this._service.execute({ email, password });
    return res.status(200).json({ token });
  };
}
