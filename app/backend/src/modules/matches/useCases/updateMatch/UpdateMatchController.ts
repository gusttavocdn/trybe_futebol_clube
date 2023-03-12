import { Request, Response } from 'express';
import { IRequestValidator } from '../../../../providers';

import { UpdateMatchService } from './UpdateMatchService';

export class UpdateMatchController {
  constructor(
    private readonly _service: UpdateMatchService,
    private readonly _requestValidator: IRequestValidator,
  ) {}

  public handle = async (req: Request, res: Response) => {
    await this._requestValidator.validate(req.body);

    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    await this._service.execute(Number(id), { homeTeamGoals, awayTeamGoals });
    return res.status(200).json({ message: 'Match updated successfully' });
  };
}
