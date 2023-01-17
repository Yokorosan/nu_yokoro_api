import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserLogin } from "../../interfaces/user";

const createSessionService = async (data: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: data.email });

  if (!user) {
    throw new AppError("Email or Password Invalid", 403);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Email or Password Invalid", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdmin,
      isActive: user.isActive,
    },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return token;
};

export { createSessionService };
