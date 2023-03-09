import { IFindUserByEmailRepository } from '../../../../repositories/contracts/IUsersRepository';
import { ILoginDTO } from '../../dtos/ILoginDTO';

export default class SignInService {
  constructor(private readonly _repository: IFindUserByEmailRepository) {}

  async execute({ email, password }: ILoginDTO): Promise<string> {
    const user = await this._repository.findUserByEmail(email);

    if (!user || user.password !== password) return 'null';

    return `${user.email}`;
  }
}
