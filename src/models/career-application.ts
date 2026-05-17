import { Schema, model, models } from "mongoose";

const CareerApplicationSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    experience: { type: String, required: true, trim: true },
    portfolio: { type: String, trim: true },
    coverLetter: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const CareerApplication =
  models.CareerApplication || model("CareerApplication", CareerApplicationSchema);
