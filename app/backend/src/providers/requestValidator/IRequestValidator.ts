export interface IRequestValidator {
  validate(data: unknown): Promise<void>;
}
