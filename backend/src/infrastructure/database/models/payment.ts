import { Schema, model, Document, Types } from "mongoose";
import { IPayment } from "../../../domain/entities/payment.interface";

const paymentSchema = new Schema<IPayment>(
  {
    order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    amount: { type: Number, required: true },
    method: {
      type: String,
      enum: ["bank_transfer", "upi", "cash"],
      required: true,
    },
    status: {
      type: String,
      enum: ["success", "failed", "pending"],
      default: "pending",
    },
    transactionId: String,
  },
  { timestamps: true }
);

export const PaymentModel = model<IPayment>("Payment", paymentSchema);