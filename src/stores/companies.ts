/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import {
  Company,
  ResponseObj,
  MetricsInterface,
  OrderMetricInterface,
} from "src/models/models";

const path = "companies";
const handlerRequest = new Request({
  Accept: "application/json",
});

export const useCompaniesStore = defineStore("companiesStore", () => {
  // data
  const dateFilterMetrics = ref<any>({});
  const metrics = ref<MetricsInterface>({});
  const totalItems = ref<number>(0);
  const companies = ref<Company[]>([]);
  const campaings = ref<any[]>([]);
  const metricsOrders = ref<OrderMetricInterface>({
    cancelledAndRejectedOrders: 0,
    cancelledDropi: 0,
    collectionDropi: 0,
    deliveredDropiOrders: 0,
    pendingConfirmationDropiOrders: 0,
    pendingDropiOrders: 0,
    rejectedDropi: 0,
    returnedDropiOrders: 0,
    totalDropiOrders: 0,
    totalFreight: 0,
    returnedFreightDropi: 0,
    totalFreightDelivered: 0,
    totalHealthWellbeing: 0,
    totalMoneyInDropi: 0,
    totalOrdersDropiDelivered: 0,
    shopify: {},
  });

  // methods
  const doSaveCompany = async (
    params: Company
  ): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doPostRequest(
        `${path}`,
        params,
        true,
        false
      )) as ResponseObj;
      if (response.success) {
        companies.value.push(response.data);
        totalItems.value++;
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const doListCompanies = async (query: string) => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}`,
        query,
        true
      )) as ResponseObj;
      if (response.success) {
        companies.value = response.data.companies;
        totalItems.value = response.data.totalItems;
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const doUpdateCompany = async (params: Company) => {
    try {
      const response = (await handlerRequest.doPutRequest(
        `${path}/${params._id}`,
        params,
        true,
        false
      )) as ResponseObj;
      if (response.success) {
        const index = companies.value.findIndex(
          (item: Company) => item._id === params._id
        );
        if (index !== -1) {
          companies.value[index] = response.data;
        }
        return response;
      }
    } catch (error) {}
  };

  const doDeleteCompany = async (id: string) => {
    try {
      const response = (await handlerRequest.doDeleteRequest(
        `${path}/${id}`,
        true
      )) as ResponseObj;
      if (response.success) {
        const index = companies.value.findIndex(
          (item: Company) => item._id === id
        );
        if (index !== -1) {
          companies.value.splice(index, 1);
          totalItems.value--;
        }
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const listForSelect = async () => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}/for-select`,
        "",
        true
      )) as ResponseObj;
      if (response.success) {
        companies.value = response.data;
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const listCampaings = async (id: string) => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}/${id}/campaings`,
        "",
        true
      )) as ResponseObj;
      if (response.success) {
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const listAds = async (company: string, id: string | number) => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}/${company}/${id}/ads`,
        "",
        true
      )) as ResponseObj;
      if (response.success) {
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const listMetrics = async (
    company: string,
    id: string | number,
    query: string
  ) => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}/${company}/${id}/metrics${query}`,
        "",
        true
      )) as ResponseObj;
      if (response.success) {
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const clearCompanies = () => {
    companies.value = [];
    totalItems.value = 0;
  };

  const setMetrics = (data: MetricsInterface) => {
    metrics.value = data;
  };

  const setMetricsOrders = (data: OrderMetricInterface) => {
    metricsOrders.value = data;
  };

  const setDateFilterMetrics = (date: any) => {
    dateFilterMetrics.value = date;
  };

  // return statement
  return {
    listAds,
    metrics,
    campaings,
    companies,
    setMetrics,
    totalItems,
    listMetrics,
    listCampaings,
    metricsOrders,
    listForSelect,
    doSaveCompany,
    clearCompanies,
    doUpdateCompany,
    doListCompanies,
    doDeleteCompany,
    setMetricsOrders,
    dateFilterMetrics,
    setDateFilterMetrics,
  };
});
