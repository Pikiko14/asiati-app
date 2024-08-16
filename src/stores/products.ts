/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import { ResponseObj, ProductsInterface } from "src/models/models";

const path = "products";
const handlerRequest = new Request({
  Accept: "application/json",
});

export const useProductsStore = defineStore("productsStore", () => {
  // data
  const products = ref<ProductsInterface[]>([]);
  const totalItems = ref<number>(0);

  // methods
  /**
   * Create products
   * @param params
   * @returns {Promise<ResponseObj | void>}
   */
  const doSaveProduct = async (
    params: ProductsInterface
  ): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doPostRequest(
        `${path}`,
        params,
        true,
        false
      )) as ResponseObj;
      if (response.success) {
        products.value.push(response.data);
        totalItems.value++;
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  // return statement
  return {
    products,
    totalItems,
    doSaveProduct,
  };
});
