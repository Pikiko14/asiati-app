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
  const totalItems = ref<number>(0);
  const products = ref<ProductsInterface[]>([]);

  // methods
  /**
   * Create products
   * @param { ProductsInterface } params
   * @returns { Promise<ResponseObj | void> }
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
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * List products
   * @param { string } query
   * @returns { Promise<ResponseObj | void> }
   */
  const doListProducts = async (query: string) => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}`,
        query,
        true
      )) as ResponseObj;
      if (response.success) {
        products.value = response.data.products;
        totalItems.value = response.data.totalItems;
        return response;
      }
      // validamos  el usuario
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Delete products
   * @param { string } id
   * @returns { Promise<ResponseObj | void> }
   */
  const doDeleteProduct = async (id: string): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doDeleteRequest(
        `${path}/${id}`,
        true
      )) as ResponseObj;
      if (response.success) {
        const index = products.value.findIndex(
          (user: ProductsInterface) => user._id === id
        );
        if (index !== -1) {
          products.value.splice(index, 1);
          totalItems.value--;
        }
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const doUpdateProducts = async (params: ProductsInterface) => {
    try {
      const response = (await handlerRequest.doPutRequest(
        `${path}/${params._id}`,
        params,
        true,
        false
      )) as ResponseObj;
      if (response.success) {
        const index = products.value.findIndex(
          (item: ProductsInterface) => item._id === params._id
        );
        if (index !== -1) {
          products.value[index] = response.data;
        }
        return response;
      }
    } catch (error) {}
  };

  // return statement
  return {
    products,
    totalItems,
    doSaveProduct,
    doListProducts,
    doDeleteProduct,
    doUpdateProducts,
  };
});
