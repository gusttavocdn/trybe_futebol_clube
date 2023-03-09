import { IPasswordCompare } from '../../../../providers';
import { IFindUserByEmailRepository } from '../../../../repositories/contracts/IUsersRepository';
import { ILoginDTO } from '../../dtos/ILoginDTO';

export default class SignInService {
  constructor(
    private readonly _repository: IFindUserByEmailRepository,
    private readonly _passwordCompare: IPasswordCompare,
  ) {}

  async execute({ email, password }: ILoginDTO): Promise<string> {
    const user = await this._repository.findUserByEmail(email);

    if (!user) throw new Error();

    const isPasswordValid = await this._passwordCompare.isValid(
      password,
      user.password,
    );

    if (!isPasswordValid) throw new Error();

    return `${user.email}`;
  }
}
