import { Schema, model } from "mongoose";
import { IDevice } from "../../../domain/entities/device.interface";

const deviceSchema = new Schema<IDevice>(
  {
    brand: { type: String, required: true },
    deviceModel: { type: String, required: true },
    storage: { type: String, required: true },
    condition: {
      type: String,
      enum: ["excellent", "good", "fair", "poor"],
      required: true,
    },
    basePrice: { type: Number, required: true },
    images: [String],
  },
  { timestamps: true }
);

export const DeviceModel = model<IDevice>("Device", deviceSchema);
