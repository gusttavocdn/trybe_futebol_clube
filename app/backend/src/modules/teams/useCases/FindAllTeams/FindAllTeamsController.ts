import { Request, Response } from 'express';

import { FindAllTeamsService } from './FindAllTeamsService';

export class FindAllTeamsController {
  constructor(private readonly _service: FindAllTeamsService) {}

  public handle = async (req: Request, res: Response) => {
    const teams = await this._service.execute();
    return res.status(200).json(teams);
  };
}
