import { z } from "zod";

export const schema = z.object({
  company: z.string().max(30).trim().min(1, "Company is required"),
  position: z.string().max(30).trim().min(1, "Position is required"),
  date: z.iso.date("Date is required"),
  label: z.string().min(1, "Label is required"),
  notes: z.string().max(200).optional(),
});

export type FormDataShape = z.infer<typeof schema>;
