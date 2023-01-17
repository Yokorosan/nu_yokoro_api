import { QueryFailedError } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser, IUserRequest } from "../../interfaces/user";
import { createUserResponseSchema } from "../../schemas/user.schema";

const createNewUserService = async (data: IUserRequest): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = userRepo.create(data);

  try {
    await userRepo.save(user);
  } catch (QueryFailedError) {
    throw new AppError("Email Alredy In Use", 409);
  }

  const userWithoutPassword = createUserResponseSchema.validate(user, {
    stripUnknown: true,
    abortEarly: false,
  });

  return userWithoutPassword;
};
export { createNewUserService };
