/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import { ResponseObj, Company, MetricsInterface } from "src/models/models";

const path = "companies";
const handlerRequest = new Request({
  Accept: "application/json",
});

export const useCompaniesStore = defineStore("companiesStore", () => {
  // data
  const metrics = ref<MetricsInterface>({});
  const totalItems = ref<number>(0);
  const companies = ref<Company[]>([]);

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
        companies.value = response.data;
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
        companies.value = response.data;
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const listMetrics = async (company: string, id: string | number) => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}/${company}/${id}/metrics`,
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

  const clearCompanies = () => {
    companies.value = [];
    totalItems.value = 0;
  };

  const setMetrics = (data: MetricsInterface) => {
    metrics.value = data;
  };

  // return statement
  return {
    listAds,
    metrics,
    companies,
    setMetrics,
    totalItems,
    listMetrics,
    listCampaings,
    listForSelect,
    doSaveCompany,
    clearCompanies,
    doUpdateCompany,
    doListCompanies,
    doDeleteCompany,
  };
});
