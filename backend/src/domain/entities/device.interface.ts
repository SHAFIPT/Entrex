import { Document } from "mongoose";

export interface IDevice extends Document {
  brand: string;
  deviceModel: string;
  storage: string;
  condition: "excellent" | "good" | "fair" | "poor";
  basePrice: number;
  images?: string[];
}