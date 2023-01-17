import { Router } from "express";
import {
  createNewUserController,
  deleteUserController,
  editUserController,
  listAllRegisteredUserController,
} from "../controllers/user.controller";
import { ensureAuthUserMiddleware } from "../middlewares/sessions/ensureAuthUser.middleware";
import { verifyIfUserIsAdminMiddleware } from "../middlewares/user/verifyIfUserisAdmin.middleware";
import { verifyUserDataMiddleware } from "../middlewares/user/verifyUserData.middleware";

const userRoutes = Router();

userRoutes.post("", verifyUserDataMiddleware, createNewUserController);

userRoutes.post(
  "/admin",
  ensureAuthUserMiddleware,
  verifyIfUserIsAdminMiddleware,
  createNewUserController
);

userRoutes.get(
  "",
  ensureAuthUserMiddleware,
  verifyIfUserIsAdminMiddleware,
  listAllRegisteredUserController
);

userRoutes.patch("/:id", ensureAuthUserMiddleware, editUserController);

userRoutes.delete("/:id", ensureAuthUserMiddleware, deleteUserController);

export { userRoutes };
