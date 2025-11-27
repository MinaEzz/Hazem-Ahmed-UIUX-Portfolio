import { z, ZodSchema } from "zod";

export function validate<T>(schema: ZodSchema<T>, values: T) {
  try {
    schema.parse(values);
    return { valid: true, errors: [] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map((err) => ({
        field: err.path[0] as string,
        message: err.message,
      }));
      return { valid: false, errors };
    }
    return {
      valid: false,
      errors: [{ field: "unknown", message: "Unknown error" }],
    };
  }
}
