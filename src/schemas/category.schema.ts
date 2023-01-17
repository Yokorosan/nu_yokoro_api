import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ICategoryRequest,
  ICategoryRequestResponse,
  ICategoryUpdate,
  ICategoryUpdateResponse,
} from "../interfaces/category";

const createCategory: SchemaOf<ICategoryRequest> = yup.object().shape({
  name: yup.string().required(),
});

const createCategoryResponse: SchemaOf<ICategoryRequestResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    name: yup.string().required(),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
  });

const updateCategory: SchemaOf<ICategoryUpdate> = yup.object().shape({
  name: yup.string(),
});

const updateCategoryResponse: SchemaOf<ICategoryUpdateResponse> = yup
  .object()
  .shape({
    name: yup.string(),
    updatedAt: yup.date().required(),
  });

export {
  createCategory,
  createCategoryResponse,
  updateCategory,
  updateCategoryResponse,
};
