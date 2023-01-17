import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const verifyUserIsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository
    .createQueryBuilder("user")
    .withDeleted()
    .where("user.email = :email", { email: req.body.email })
    .andWhere("user.isActive = :isActive", { isActive: false })
    .getOne();

  if (user) {
    throw new AppError("User is Inactive", 401);
  }

  return next();
};

export { verifyUserIsActiveMiddleware };
