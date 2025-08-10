import { Request, Response, NextFunction } from "express";
import { ZodError, ZodIssue } from "zod";
import { HttpStatusCode } from "../../constants/statusCode";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("❌ Error:", err);

  // Zod validation error
  if (err instanceof ZodError) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      success: false,
      errors: err.issues.map((issue: ZodIssue) => ({
        field: issue.path.join("."),
        message: issue.message
      }))
    });
  }

  // Known application error with status
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  }

  // Generic fallback
  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong, please try again later"
  });
}
