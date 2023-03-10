import { Unauthorized } from '../../../../errors';
import { IPasswordManager, ITokenManager } from '../../../../providers';
import { IFindUserByEmailRepository } from '../../../../repositories/contracts/IUsersRepository';
import { ILoginDTO } from '../../dtos/ILoginDTO';

export default class SignInService {
  constructor(
    private readonly _repository: IFindUserByEmailRepository,
    private readonly _passwordManager: IPasswordManager,
    private readonly _tokenManager: ITokenManager,
  ) {}

  async execute({ email, password }: ILoginDTO): Promise<string> {
    const user = await this._repository.findUserByEmail(email);

    if (!user) throw new Unauthorized('Incorrect email or password');

    const isPasswordValid = await this._passwordManager.isValid(
      password,
      user.password,
    );

    if (!isPasswordValid) throw new Unauthorized('Incorrect email or password');

    const token = await this._tokenManager.generate({
      email: user.email,
      role: user.role,
    });

    return token;
  }
}
