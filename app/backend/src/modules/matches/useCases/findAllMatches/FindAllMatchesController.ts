import { Request, Response } from 'express';
import { FindAllMatchesService } from './FindAllMatchesService';

export class FindAllMatchesController {
  constructor(private readonly _service: FindAllMatchesService) {}

  public handle = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    const matches = await this._service.execute(inProgress as never);
    return res.status(200).json(matches);
  };
}
