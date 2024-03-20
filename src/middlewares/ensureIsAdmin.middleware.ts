import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const ensureIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const admin = res.locals.token.admin;

  if (admin) {
    return next();
  }

  throw new AppError("Insufficient permission", 403);
};

export default ensureIsAdminMiddleware;
