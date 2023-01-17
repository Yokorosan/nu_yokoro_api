export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
}

export interface IUserUpdateResponse {
  name?: string;
  email?: string;
  password?: string;
  updatedAt: Date;
}
