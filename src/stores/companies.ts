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

  // return statement
  return {
    companies,
    totalItems,
    doSaveCompany,
    doListCompanies,
  };
});