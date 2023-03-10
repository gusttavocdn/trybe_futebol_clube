import { Request, Response } from 'express';
import { IRequestValidator } from '../../../../providers';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { SignUpService } from './SignUpService';

export default class SignUpController {
  constructor(
    private readonly _service: SignUpService,
    private readonly _validator: IRequestValidator,
  ) {}

  public handle = async (req: Request, res: Response) => {
    await this._validator.validate(req.body);

    const { email, password, role, username } = req.body as ICreateUserDTO;

    const token = await this._service.execute({
      username,
      email,
      password,
      role,
    });

    return res.status(201).json({ token });
  };
}
