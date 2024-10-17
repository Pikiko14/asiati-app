/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import { ConfigurationInterface, ResponseObj } from "src/models/models";

const path = "configuration";
const handlerRequest = new Request({
  Accept: "application/json",
});

export const useConfigurationStore = defineStore("configurationStore", () => {
  // data
  const configurationData = ref<ConfigurationInterface>({});

  // methods
  const saveConfiguration = async (
    params: ConfigurationInterface
  ): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doPostRequest(
        `${path}`,
        params,
        true,
        false
      )) as ResponseObj;
      if (response.success) {
        configurationData.value = response.data;
        await listConfiguration();
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listConfiguration = async () => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}`,
        "",
        true
      )) as ResponseObj;
      if (response.success) {
        configurationData.value = response.data;
        return response;
      }
      // validamos  el usuario
    } catch (error) {
      console.log(error);
    }
  };

  // return statement
  return {
    saveConfiguration,
    configurationData,
    listConfiguration,
  };
});
