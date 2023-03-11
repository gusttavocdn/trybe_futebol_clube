import { ITeamsRepository } from '../../../../repositories/contracts/ITeamsRepository';
import { IMatchesRepository } from '../../../../repositories/contracts/IMatchesRepository';
import { ICreateMatchDTO } from '../../dtos/ICreateMatchDTO';
import { NotFound } from '../../../../errors';

export class CreateMatchService {
  constructor(
    private readonly _matchesRepository: IMatchesRepository,
    private readonly _teamsRepository: ITeamsRepository,
  ) {}

  public async execute(match: ICreateMatchDTO) {
    await this.validateTeams(match.homeTeam, match.awayTeam);

    const createdMatch = await this._matchesRepository.create({
      ...match,
      inProgress: true,
    });

    return createdMatch;
  }

  private async validateTeams(homeTeamId: number, awayTeamId: number) {
    const homeTeamExists = await this._teamsRepository.findById(homeTeamId);
    const awayTeamExists = await this._teamsRepository.findById(awayTeamId);

    if (!homeTeamExists || !awayTeamExists) {
      throw new NotFound('There is no team with such id!');
    }
  }
}
