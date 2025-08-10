import { Schema, model } from "mongoose";
import { IUser } from "../../../domain/entities/user.interface";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
    },
  },
  { timestamps: true }
);

export const UserModel = model<IUser>("User", userSchema);
