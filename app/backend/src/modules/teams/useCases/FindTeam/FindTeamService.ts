import { NotFound } from '../../../../errors';
import { Team } from '../../../../entities';
import { ITeamsRepository } from '../../../../repositories/contracts/ITeamsRepository';

export class FindTeamService {
  constructor(private readonly _repository: ITeamsRepository) {}

  public async execute(id: number): Promise<Team> {
    const team = await this._repository.findById(id);

    if (!team) throw new NotFound('Team not found');

    return team;
  }
}
