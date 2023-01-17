import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { createUserSchema } from "../../schemas/user.schema";

const verifyUserDataMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.isAdmin === true) {
    const userRepo = AppDataSource.getRepository(User);
    const existAdm = await userRepo.findOneBy({ isAdmin: true });
    if (existAdm) {
      throw new AppError("An Administrator Alredy Exists", 401);
    }
  }

  const validatedData = await createUserSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  req.body = validatedData;

  return next();
};

export { verifyUserDataMiddleware };
