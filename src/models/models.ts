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
  date: any;
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

export interface OrderImportInterface {
  file: any;
  type: string | null;
  company: string | null;
}

export enum TypeOrder {
  DROPI = "Dropi",
}

export interface CompanyInterface {
  _id: string;
  name: string;
}

export interface OrdersInterface {
  id?: string;
  _id?: string;
  external_id: string | number;
  date_order: string;
  phone: string | number;
  guide_number?: number | string;
  guide_status?: string | string;
  province: string;
  city: string;
  quantity_order?: number | string;
  order_notes?: string;
  order_conveyor: string;
  total_order: string | number | any;
  order_profit?: string | number | any;
  freight_price: string | number | any;
  return_freight_cost?: string | number | any;
  products: string;
  quantity: number;
  type_order: TypeOrder;
  company: CompanyInterface;
}

export interface OrderMetricInterface {
  cancelledDropi: number;
  rejectedDropi: number;
  collectionDropi: number;
  totalDropiOrders: number;
  pendingDropiOrders: number;
  returnedDropiOrders: number;
  deliveredDropiOrders: number;
  pendingConfirmationDropiOrders: number;
  cancelledAndRejectedOrders: number;
  totalMoneyInDropi: number;
  totalOrdersDropiDelivered: number;
  totalFreightDelivered: number;
  totalFreight: number;
  totalHealthWellbeing: number;
  returnedFreightDropi: number;
  totalOrdersDeliveredDropi?: number;
  shopify: any;
  totalHistoricalDevolution: number;
  guiasAnuladas: number;
  totalHistoricalCancelled: number;
  descIva: number;
  productCosto: number;
  ivaAFavor: number;
  utilidadBruta: number;
  utilidadBrutaConPauta: number;
  flete?: number;
  devolucionFlete: number;
  fullFilmentTotal: number;
  costoOperativo: number;
  cuatroPorMil: number;
  renttax: number;
}

export interface ProductsInterface {
  id?: string;
  _id?: string;
  name: string;
  value: number;
  stock?: number;
  final_price?: number;
  description?: string;
  iva?: number;
}

export interface WalletImportInterface {
  file: any;
  company: string | null;
  type?: TypeOrder;
}

export enum WalletTypeMovement {
  CREDIT = "credit",
  DEBIT = "debit",
}

export interface WalletInterface {
  id?: string;
  _id?: string;
  id_movement?: string;
  external_id?: string;
  date?: string;
  type?: WalletTypeMovement;
  amount?: number;
  preview_amount?: number;
  guide_number?: string;
  description?: string;
  type_order?: TypeOrder;
  order_id?: string;
  company?: CompanyInterface;
}

export interface ConfigurationInterface {
  _id?: string;
  general_iva?: number | null;
  fullfilment?: string | number | null;
  renttax?: any;
}

export interface ExpenseInterface {
  id?: string | number;
  _id?: string;
  company?: string | CompanyInterface;
  title: string;
  amount: number;
  start: string;
  end: string;
}
