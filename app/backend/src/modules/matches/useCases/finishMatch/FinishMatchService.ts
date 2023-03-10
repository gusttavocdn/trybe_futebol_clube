import { IMatchesRepository } from '../../../../repositories/contracts/IMatchesRepository';

export class FinishMatchService {
  constructor(private readonly _repository: IMatchesRepository) {}

  public async execute(id: number): Promise<void> {
    await this._repository.finishMatch(id);
  }
}
