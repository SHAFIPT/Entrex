import { IFormSubmission } from "../../domain/entities/formSubmission";
import { IFormRepository } from "../interfaces/IFormRepository";

export class GetAllFormSubmissions {
    constructor(private readonly repository: IFormRepository) { }
    async execute(): Promise<IFormSubmission[]> {
        return this.repository.findAll();
    }
}