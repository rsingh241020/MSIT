import { Schema, model, models } from "mongoose";

const NewsletterSubscriptionSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const NewsletterSubscription =
  models.NewsletterSubscription ||
  model("NewsletterSubscription", NewsletterSubscriptionSchema);
