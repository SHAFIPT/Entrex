import { CreateFormSubmission } from "../application/use-cases/createFormSubmission";
import { GetAllFormSubmissions } from "../application/use-cases/getAllFormSubmissions";
import { FormRepository } from "../infrastructure/repositories/formSubmissionRepository";
import { FormController } from "../interfaces/controllers/formSubmissionController";

const repository = new FormRepository();
const createUsecase = new CreateFormSubmission(repository);
const getAllUsecase = new GetAllFormSubmissions(repository);

export const formController = new FormController(createUsecase, getAllUsecase);