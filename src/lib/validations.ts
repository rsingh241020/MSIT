import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Enter a valid email address."),
  phone: z.string().min(7, "Phone number is required."),
  company: z.string().min(2, "Company name is required."),
  service: z.string().min(2, "Please select a service."),
  message: z.string().min(20, "Message should be at least 20 characters."),
});

export const careerApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().min(7, "Phone number is required."),
  position: z.string().min(2, "Position is required."),
  experience: z.string().min(1, "Experience is required."),
  portfolio: z.string().url("Enter a valid portfolio or LinkedIn URL.").optional().or(z.literal("")),
  coverLetter: z.string().min(30, "Cover letter should be at least 30 characters."),
});

export const newsletterSchema = z.object({
  email: z.email("Enter a valid email address."),
});
