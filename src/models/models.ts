/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginInterface {
  username: string | null;
  password: string | null;
}

export interface ResponseObj {
  success?: boolean;
  error?: boolean;
  message?: string | null;
  data?: any;
  hide?: boolean;
  status?: string;
}

export interface PaginationInterface {
  page: number | string;
  perPage: number | string;
  search?: string;
}

export enum UserRole {
  ADMIN = "admin",
  EMPLOYEE = "employee",
}

export interface User extends LoginInterface {
  id?: string;
  _id?: string;
  email: string;
  role?: UserRole;
  scopes?: string[];
  is_active?: boolean;
  recovery_token?: string;
  profile_pictury?: string;
  name: string | undefined;
  token?: string | undefined;
  last_name: string | undefined;
  confirmation_token?: string | null;
}

export interface LoginReturn {
  token: string;
  user: User;
}
