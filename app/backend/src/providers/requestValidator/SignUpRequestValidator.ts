/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';
import { IRequestValidator } from './IRequestValidator';

export class SignUpValidator implements IRequestValidator {
  private readonly schema = z.object({
    username: z
      .string({ required_error: 'Username is required' })
      .min(5, { message: 'Username must have at least 5 characters' }),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
      })
      .email({
        message: 'Email is invalid',
      }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(8, { message: 'Password must have at least 8 characters' })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
        {
          message: [
            'Password must contain at least one lowercase letter',
            'one uppercase letter, one special character,',
            'and one number',
          ].join(' '),
        },
      ),
    role: z.enum(['user', 'admin'], {
      required_error: 'Role is required',
    }),
  });

  public async validate(data: unknown): Promise<void> {
    await this.schema.parseAsync(data);
  }
}
