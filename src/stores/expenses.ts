/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import { ExpenseInterface, ResponseObj } from "src/models/models";

const path = "expenses";
const handlerRequest = new Request({
  Accept: "application/json",
});

export const useExpensesStore = defineStore("expensesStore", () => {
  // data

  // methods
  const saveExpenses = async (
    params: ExpenseInterface
  ): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doPostRequest(
        `${path}`,
        params,
        true,
        false
      )) as ResponseObj;
      if (response.success) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listExpenses = async (): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}`,
        "",
        true
      )) as ResponseObj;
      if (response.success) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // return statement
  return {
    saveExpenses,
    listExpenses,
  };
});
