// src/infrastructure/repositories/FormRepository.ts
import { IFormRepository } from "../../application/interfaces/IFormRepository";
import { IFormSubmission } from "../../domain/entities/formSubmission";
import FormSubmissionModel, { FormSubmissionDoc } from "../database/models/formSubmissionModel";

export class FormRepository implements IFormRepository {
  async save(data: IFormSubmission): Promise<IFormSubmission> {
    const created = await FormSubmissionModel.create({
      ...data,
      date: data.date instanceof Date ? data.date : new Date(data.date),
    } as Partial<FormSubmissionDoc>);

    const obj = created.toObject();
    return {
      name: obj.name,
      email: obj.email,
      phone: obj.phone,
      date: obj.date,
      time: obj.time,
      adults: obj.adults,
      children: obj.children,
      message: obj.message,
    };
  }

  async findAll(): Promise<IFormSubmission[]> {
    const docs = await FormSubmissionModel.find().sort({ createdAt: -1 }).lean();
    return docs.map((d) => ({
      name: d.name,
      email: d.email,
      phone: d.phone,
      date: d.date,
      time: d.time,
      adults: d.adults,
      children: d.children,
      message: d.message,
    }));
  }
}
 