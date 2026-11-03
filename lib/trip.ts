import { z } from "zod";
import type useProduct from "@/hooks/product";

export type TripProduct = ReturnType<typeof useProduct>[number];

export type ErrorCode = "required" | "email" | "phone" | "travelers";

const required = z.string().trim().min(1, "required");

// 7-15 digits, optional leading +, spaces/dashes/parentheses allowed
const phone = required.refine((v) => {
  if (!/^\+?[\d\s\-()]+$/.test(v)) return false;
  const digits = v.replace(/\D/g, "").length;
  return digits >= 7 && digits <= 15;
}, "phone");

export const detailsSchema = z.object({
  name: required,
  email: required.pipe(z.email("email")),
  phone,
  country: required,
});

export const tripSchema = z.object({
  date: required,
  travelers: required.refine(
    (v) => Number.isInteger(Number(v)) && Number(v) >= 1,
    "travelers"
  ),
});

export type TripValues = z.infer<typeof detailsSchema> &
  z.infer<typeof tripSchema>;

export type TripErrors = Partial<Record<keyof TripValues, ErrorCode>>;

export const emptyValues: TripValues = {
  date: "",
  travelers: "",
  name: "",
  email: "",
  phone: "",
  country: "",
};

function validate(schema: z.ZodType, values: unknown): TripErrors {
  const result = schema.safeParse(values);
  if (result.success) return {};

  const errors: TripErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof TripValues;
    if (!errors[key]) errors[key] = issue.message as ErrorCode;
  }
  return errors;
}

export const validateDetails = (v: TripValues) => validate(detailsSchema, v);
export const validateTrip = (v: TripValues) => validate(tripSchema, v);

// Validate a single field (used on blur)
export const validateField = (
  name: keyof TripValues,
  v: TripValues
): ErrorCode | undefined =>
  ({ ...validateDetails(v), ...validateTrip(v) })[name];