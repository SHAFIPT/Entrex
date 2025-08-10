import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: "customer" | "admin";
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
