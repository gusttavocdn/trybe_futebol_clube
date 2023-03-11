import { Request, Response } from 'express';
import { IRequestValidator } from '../../../../providers';
import { CreateMatchService } from './CreateMatchService';

export class CreateMatchController {
  constructor(
    private readonly _service: CreateMatchService,
    private readonly _requestValidator: IRequestValidator,
  ) {}

  public handle = async (req: Request, res: Response) => {
    await this._requestValidator.validate(req.body);

    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const match = await this._service.execute({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
    });

    return res.status(201).json(match);
  };
}
