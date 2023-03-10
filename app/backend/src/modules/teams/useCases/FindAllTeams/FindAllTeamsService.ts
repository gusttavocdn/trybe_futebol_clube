import { Team } from '../../../../entities';
import { ITeamsRepository } from '../../../../repositories/contracts/ITeamsRepository';

export class FindAllTeamsService {
  constructor(private readonly _repository: ITeamsRepository) {}

  public async execute(): Promise<Team[]> {
    const teams = await this._repository.findAll();
    return teams;
  }
}
