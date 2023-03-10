import { z } from 'zod';

import { IRequestValidator } from './IRequestValidator';

export class UpdateMatchRequestValidator implements IRequestValidator {
  private readonly schema = z.object({
    homeTeamGoals: z.number(),
    awayTeamGoals: z.number(),
  });

  public async validate(data: unknown): Promise<void> {
    await this.schema.parseAsync(data);
  }
}
