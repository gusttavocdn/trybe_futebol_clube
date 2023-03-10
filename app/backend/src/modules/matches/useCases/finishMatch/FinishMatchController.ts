import { Request, Response } from 'express';
import { FinishMatchService } from './FinishMatchService';

export class FinishMatchController {
  constructor(private readonly _service: FinishMatchService) {}

  public handle = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this._service.execute(Number(id));
    return res.status(200).json({ message: 'Finished' });
  };
}
