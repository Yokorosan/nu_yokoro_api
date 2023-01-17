export interface ICategoryRequest {
  name: string;
}

export interface ICategoryRequestResponse {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategoryUpdate {
  name?: string;
}

export interface ICategoryUpdateResponse {
  name?: string;
  updatedAt: Date;
}
