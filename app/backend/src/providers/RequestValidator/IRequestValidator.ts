export interface IRequestValidator {
  validate(data: unknown): Promise<any>;
}
