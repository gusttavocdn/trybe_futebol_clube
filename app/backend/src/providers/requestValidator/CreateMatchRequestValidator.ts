/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';

import { IRequestValidator } from './IRequestValidator';

export class CreateMatchRequestValidator implements IRequestValidator {
  private readonly schema = z
    .object({
      homeTeam: z
        .number({
          required_error: 'Home team is required',
        })
        .min(1),
      awayTeam: z
        .number({
          required_error: 'Away team is required',
        })
        .min(1),
      homeTeamGoals: z
        .number({
          required_error: 'Home team goals is required',
        })
        .min(0),
      awayTeamGoals: z
        .number({
          required_error: 'Away team goals is required',
        })
        .min(0),
    })
    .refine(({ homeTeam, awayTeam }) => homeTeam !== awayTeam, {
      message: 'It is not possible to create a match with two equal teams',
    });

  public async validate(data: unknown): Promise<void> {
    await this.schema.parseAsync(data);
  }
}
