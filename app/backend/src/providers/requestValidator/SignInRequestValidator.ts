/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';
import { IRequestValidator } from './IRequestValidator';

export class SignInValidator implements IRequestValidator {
  private readonly schema = z.object({
    email: z
      .string({
        required_error: 'All fields must be filled',
        invalid_type_error: 'Email must be a valid email address',
      })
      .email({
        message: 'Email must be a valid email address',
      }),
    password: z
      .string()
      .nonempty({ message: 'All fields must be filled' }),
  });

  public async validate(data: unknown): Promise<void> {
    await this.schema.parseAsync(data);
  }
}
