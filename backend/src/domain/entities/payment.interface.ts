import { Types } from "mongoose";

export interface IPayment extends Document {
  order: Types.ObjectId;
  amount: number;
  method: "bank_transfer" | "upi" | "cash";
  status: "success" | "failed" | "pending";
  transactionId?: string;
  createdAt: Date;
}
