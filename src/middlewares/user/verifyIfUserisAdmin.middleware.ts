import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";

const verifyIfUserIsAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.isAdm === false) {
    throw new AppError("You don't have permission", 403);
  }

  return next();
};

export { verifyIfUserIsAdminMiddleware };
