import mongoose, { Schema, Document } from "mongoose";

export interface FormSubmissionDoc extends Document {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  adults: number;
  children: number;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const formSubmissionSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    adults: { type: Number, required: true, min: 0 },
    children: { type: Number, required: true, min: 0 },
    message: { type: String },
  },
  { timestamps: true }
);

const FormSubmissionModel = mongoose.model<FormSubmissionDoc>(
  "FormSubmission",
  formSubmissionSchema
);

export default FormSubmissionModel;
