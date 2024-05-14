/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import { ResponseObj, User, LoginInterface } from "src/models/models";
import { Storage } from "src/utils/storage";

const path = "auth";
const handlerRequest = new Request({
  Accept: "application/json",
});
const storage = new Storage("auth");

export const useAuthStore = defineStore("authStore", () => {
  // data
  const now = ref<Date | string>("");
  const token = ref<string>(storage.getItemStorage("local", "session") || "");
  const user = ref<User>(storage.getItemStorage("local", "user") || {});

  // methods

  const doLogin = async (
    params: LoginInterface
  ): Promise<ResponseObj | void> => {
    try {
      storage.deleteItemStorage("local", "session");
      storage.deleteItemStorage("local", "user");
      const response = (await handlerRequest.doPostRequest(
        `${path}/login`,
        params,
        false,
        false
      )) as ResponseObj;
      if (response.success) {
        const { data } = response;
        // set user in storage
        storage.saveInStorage("local", "user", data.user);
        // save token in cookie
        storage.saveInStorage("local", "session", data.token);
        // set data now
        token.value = data.token;
        user.value = data.user;
      }
      return response;
      // validamos  el usuario
    } catch (error) {}
  };

  const doLogout = () => {
    try {
      storage.deleteItemStorage("local", "session");
      storage.deleteItemStorage("local", "user");
      user.value = {
        _id: "",
        username: "",
        name: "",
        last_name: "",
        email: "",
        scopes: [],
        password: "",
      };
      token.value = "";
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * init recovery password
   * @param params
   * @returns
   */
  const initRecoveryPassword = async (params: any) => {
    try {
      const response = (await handlerRequest.doPostRequest(
        `${path}/recovery`,
        params,
        false,
        false
      )) as ResponseObj;
      if (response.success) {
        return response;
      }
      // validamos  el usuario
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * init recovery password
   * @param params
   * @returns
   */
  const doChangePassword = async (params: any) => {
    try {
      const response = (await handlerRequest.doPostRequest(
        `${path}/change-password`,
        params,
        false,
        false
      )) as ResponseObj;
      if (response.success) {
        return response;
      }
      // validamos  el usuario
    } catch (error) {
      console.log(error);
    }
  };

  // return statement
  return {
    user,
    token,
    now,
    doLogin,
    doLogout,
    doChangePassword,
    initRecoveryPassword,
  };
});
