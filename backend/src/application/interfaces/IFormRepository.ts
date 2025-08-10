import { IFormSubmission } from "../../domain/entities/formSubmission";

export interface IFormRepository {
  save(data: IFormSubmission): Promise<IFormSubmission>;
  findAll(): Promise<IFormSubmission[]>;
}
