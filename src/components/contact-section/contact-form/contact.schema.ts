import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().regex(/^\+?\d{7,15}$/, "Invalid phone number"),
  service: z.string().min(1, "Please select a service"),
  timeline: z.string().min(1, "Timeline is required"),
  details: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
