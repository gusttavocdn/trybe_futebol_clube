import { IMatchesRepository } from '../../../../repositories/contracts/IMatchesRepository';
import { IMatchDTO } from '../../dtos/IMatchDTO';

export class FindAllMatchesService {
  constructor(private readonly _repository: IMatchesRepository) {}

  public async execute(inProgress: 'true' | 'false'): Promise<IMatchDTO[]> {
    switch (inProgress) {
      case 'true': {
        const matches = await this._repository.findInProgress();
        return matches;
      }
      case 'false': {
        const matches = await this._repository.findNotInProgress();
        return matches;
      }
      default: {
        const matches = await this._repository.findAll();
        return matches;
      }
    }
  }
}
