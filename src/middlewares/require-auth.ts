import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors";
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new NotAuthorizedError();
  }
  next();
};
