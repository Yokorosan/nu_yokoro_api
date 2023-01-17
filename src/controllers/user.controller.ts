import { Request, Response } from "express";
import { createNewUserService } from "../services/user/createNewUser.service";

const createNewUserController = async (req: Request, res: Response) => {
  const user = await createNewUserService(req.body);

  return res.status(201).json(user);
};

const listAllRegisteredUserController = async (
  req: Request,
  res: Response
) => {};

const editUserController = async (req: Request, res: Response) => {};

const deleteUserController = async (req: Request, res: Response) => {};

export {
  createNewUserController,
  listAllRegisteredUserController,
  editUserController,
  deleteUserController,
};
