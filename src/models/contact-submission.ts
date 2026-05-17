import { Schema, model, models } from "mongoose";

const ContactSubmissionSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const ContactSubmission =
  models.ContactSubmission || model("ContactSubmission", ContactSubmissionSchema);
