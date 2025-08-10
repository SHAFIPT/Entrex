import { ICreateFormSubmission } from "../interfaces/ICreateFormSubmission";
import { IFormRepository } from "../interfaces/IFormRepository";
import { IFormSubmission } from "../../domain/entities/formSubmission";

export class CreateFormSubmission implements ICreateFormSubmission {
  constructor(private readonly repository: IFormRepository) {}

  async execute(data: IFormSubmission): Promise<IFormSubmission> {
    return this.repository.save(data);
  }
}