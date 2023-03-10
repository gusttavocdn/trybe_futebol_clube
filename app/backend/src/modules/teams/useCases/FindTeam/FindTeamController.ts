import { Request, Response } from 'express';
import { FindTeamService } from './FindTeamService';

export class FindTeamController {
  constructor(private readonly _service: FindTeamService) {}

  public handle = async (req: Request, res: Response) => {
    const { id } = req.params;

    const team = await this._service.execute(Number(id));
    return res.status(200).json(team);
  };
}
