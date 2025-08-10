import { IFormSubmission } from "../../domain/entities/formSubmission";

export interface ICreateFormSubmission {
  execute(data: IFormSubmission): Promise<IFormSubmission>;
}