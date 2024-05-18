/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import { ResponseObj, Company } from "src/models/models";

const path = "companies";
const handlerRequest = new Request({
  Accept: "application/json",
});

export const useCompaniesStore = defineStore("companiesStore", () => {
  // data
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

  const clearCompanies = () => {
    companies.value = [];
    totalItems.value = 0;
  };

  // return statement
  return {
    companies,
    totalItems,
    listForSelect,
    doSaveCompany,
    clearCompanies,
    doUpdateCompany,
    doListCompanies,
    doDeleteCompany,
  };
});
