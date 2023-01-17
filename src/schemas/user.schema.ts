import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUser,
  IUserRequest,
  IUserUpdate,
  IUserUpdateResponse,
} from "../interfaces/user";

const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required(),
  isAdmin: yup.boolean().notRequired(),
});

const createUserResponseSchema: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  isAdmin: yup.boolean().required(),
  isActive: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  password: yup.string(),
});

const userUpdateResponseSchema: SchemaOf<IUserUpdateResponse> = yup
  .object()
  .shape({
    name: yup.string(),
    email: yup.string(),
    password: yup.string(),
    updatedAt: yup.date().required(),
  });

export {
  createUserSchema,
  createUserResponseSchema,
  userUpdateSchema,
  userUpdateResponseSchema,
};
