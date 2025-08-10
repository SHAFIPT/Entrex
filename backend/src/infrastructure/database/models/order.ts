import { Schema, model, Document, Types } from "mongoose";
import { IOrder } from "../../../domain/entities/order.interface";

const orderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    device: { type: Schema.Types.ObjectId, ref: "Device", required: true },
    offerPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "completed"],
      default: "pending",
    },
    pickupAddress: { type: String, required: true },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid"],
      default: "unpaid",
    },
  },
  { timestamps: true }
);

export const OrderModel = model<IOrder>("Order", orderSchema);
