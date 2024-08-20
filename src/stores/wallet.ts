/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import { ResponseObj, WalletInterface } from "src/models/models";

const path = "wallets";
const handlerRequest = new Request({
  Accept: "application/json",
});

export const useWalletsStore = defineStore("walletsStore", () => {
  // data
  const wallets = ref<WalletInterface[]>([]);
  const totalItems = ref<number>(0);

  // methods

  const doImportWallets = async (params: any): Promise<ResponseObj | void> => {
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

  const doListWallets = async (query: string) => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}`,
        query,
        true
      )) as ResponseObj;
      if (response.success) {
        wallets.value = response.data.companies;
        totalItems.value = response.data.totalItems;
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  // return statement
  return {
    wallets,
    totalItems,
    doListWallets,
    doImportWallets,
  };
});
