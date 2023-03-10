import { NotFound } from '../../../../errors';
import { IMatchesRepository } from '../../../../repositories/contracts/IMatchesRepository';
import { IMatchUpdateDTO } from '../../dtos/IMatchUpdateDTO';

export class UpdateMatchService {
  constructor(private readonly _repository: IMatchesRepository) {}

  public async execute(id: number, match: IMatchUpdateDTO): Promise<void> {
    const matchAlreadyExists = await this._repository.findById(id);

    if (!matchAlreadyExists) throw new NotFound('Match not found');

    await this._repository.update(id, match);
  }
}
