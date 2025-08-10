import { z } from "zod";

export const formSubmissionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
  .string()
  .trim()
  .refine((val) => /^\d+$/.test(val), {
    message: "Phone number must contain only digits",
  })
  .refine((val) => !val.startsWith("0"), {
    message: "Phone number cannot start with zero",
  })
  .refine((val) => val.length === 10, {
    message: "Phone number must be exactly 10 digits",
  }),
  date: z.string().refine((val) => !Number.isNaN(Date.parse(val)), {
    message: "Invalid date format (YYYY-MM-DD expected)",
  }),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be HH:MM (24h)"),
  adults: z.coerce.number().int().min(0, "Adults must be >= 0"),
  children: z.coerce.number().int().min(0, "Children must be >= 0"),
  message: z.string().max(1000, "Message is too long").optional(),
});

export type FormSubmissionInput = z.infer<typeof formSubmissionSchema>;