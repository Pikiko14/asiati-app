/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";
import { defineStore } from "pinia";
import { Request } from "src/api/api";
import { ResponseObj, User, LoginInterface } from "src/models/models";

const path = "users";
const handlerRequest = new Request({
  Accept: "application/json",
});

export const useUsersStore = defineStore("usersStore", () => {
  // data
  const users = ref<User[]>([]);

  // methods

  const doSaveUser = async (
    params: LoginInterface
  ): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doPostRequest(
        `${path}`,
        params,
        true,
        false
      )) as ResponseObj;
      if (response.success) {
        users.value.push(response.data);
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const doListUsers = async (query: string) => {
    try {
      const response = (await handlerRequest.doGetRequest(
        `${path}`,
        query,
        true
      )) as ResponseObj;
      if (response.success) {
        users.value = response.data;
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const doDeleteUser = async (id: string) => {
    try {
      const response = (await handlerRequest.doDeleteRequest(
        `${path}/${id}`,
        true
      )) as ResponseObj;
      if (response.success) {
        const index = users.value.findIndex((user: User) => user.id === id);
        if (index > -1) {
          users.value.splice(index, 1);
        }
        users.value = response.data;
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  // return statement
  return {
    users,
    doSaveUser,
    doListUsers,
    doDeleteUser,
  };
});
