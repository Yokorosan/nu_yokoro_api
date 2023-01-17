import { Router } from "express";
import { createSessionController } from "../controllers/session.controller";
import { verifyUserIsActiveMiddleware } from "../middlewares/sessions/verifyUserIsActive.middleware";

const loginRoutes = Router();

loginRoutes.post("", verifyUserIsActiveMiddleware, createSessionController);
export { loginRoutes };
