/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginInterface {
  username: string | null;
  password: string | null;
}

export interface ResponseObj {
  success?: boolean;
  error?: boolean;
  message?: string | null | any;
  data?: any;
  hide?: boolean;
  status?: string;
}

export interface PaginationInterface {
  page: number | string;
  perPage: number | string;
  search?: string;
  pagination?: any;
}

export enum UserRole {
  ADMIN = "admin",
  CEO = "ceo",
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
  confirmation_password?: string | null;
  phone?: string | null;
}

export interface LoginReturn {
  token: string;
  user: User;
}

export interface RecoveryPasswordInterface {
  token?: string;
  password: string;
  confirmation_password: string;
}

export interface Company {
  _id?: string;
  id?: string;
  name: string;
  url: string;
  meta_app_secret: string;
  meta_app_identifier: string;
  responsable: User | string;
}

export interface CampaignsInterface {
  name: string;
  status: string;
  id: string;
  account_id: string;
}

export interface FilterInterface {
  campaign: string | number;
  ad: string | number;
}

export interface MetricsInterface {
  actions?: any[0];
  clicks?: any;
  conversion_rate_ranking?: any;
  date_start?: any;
  date_stop?: any;
  impressions?: any;
  spend?: any;
}
