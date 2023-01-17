import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleError from "./errors/handleError";
import { userRoutes } from "./routers/user.routes";
import { categoryRoutes } from "./routers/category.routes";
import { transactionRoutes } from "./routers/transaction.routes";
import { loginRoutes } from "./routers/session.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/category", categoryRoutes);
app.use("/transaction", transactionRoutes);
app.use("/login", loginRoutes);

app.use(handleError);

export default app;
