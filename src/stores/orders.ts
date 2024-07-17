/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import { OrderImportInterface, ResponseObj } from "src/models/models";

const path = "orders";
const handlerRequest = new Request({
  Accept: "application/json",
});

export const useOrdersStore = defineStore("ordersStore", () => {
  // data
  const orders = ref<OrderImportInterface[]>([]);
  const totalItems = ref<number>(0);

  // methods

  const doImportOrders = async (params: any): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doPostRequest(
        `${path}/import`,
        params,
        true,
        true
      )) as ResponseObj;
      if (response.success) {
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const doListOrders = async (query: string) => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}`,
        query,
        true
      )) as ResponseObj;
      if (response.success) {
        orders.value = response.data.companies;
        totalItems.value = response.data.totalItems;
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  // return statement
  return {
    orders,
    totalItems,
    doListOrders,
    doImportOrders,
  };
});
