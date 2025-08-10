import { Types } from "mongoose";

export interface IOrder extends Document {
  user: Types.ObjectId;
  device: Types.ObjectId;
  offerPrice: number;
  status: "pending" | "accepted" | "rejected" | "completed";
  pickupAddress: string;
  paymentStatus: "unpaid" | "paid";
  createdAt: Date;
  updatedAt: Date;
}