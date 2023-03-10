import { IPasswordManager, ITokenManager } from '../../../../providers';
import { IUsersRepository } from '../../../../repositories/contracts/IUsersRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

export class SignUpService {
  constructor(
    private readonly _repository: IUsersRepository,
    private readonly _passwordManager: IPasswordManager,
    private readonly _tokenManager: ITokenManager,
  ) {}

  public async execute({
    username,
    email,
    password,
    role,
  }: ICreateUserDTO): Promise<string> {
    const userAlreadyExists = await this._repository.findUserByEmail(email);

    if (userAlreadyExists) throw new Error('User already exists');

    const hashedPassword = await this._passwordManager.hashPassword(password);

    await this._repository.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    const token = await this._tokenManager.generate({ email, role });
    return token;
  }
}
