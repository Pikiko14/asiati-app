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
  const totalItems = ref<number>(0);

  // methods

  const doSaveUser = async (params: User): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doPostRequest(
        `${path}`,
        params,
        true,
        false
      )) as ResponseObj;
      if (response.success) {
        users.value.push(response.data);
        totalItems.value++;
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
        users.value = response.data.users;
        totalItems.value = response.data.totalItems;
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
        const index = users.value.findIndex((user: User) => user._id === id);
        if (index !== -1) {
          users.value.splice(index, 1);
          totalItems.value--;
        }
        return response;
      }
      // validamos  el usuario
    } catch (error) {}
  };

  const doUpdateUser = async (params: User): Promise<ResponseObj | void> => {
    try {
      const response = (await handlerRequest.doPutRequest(
        `${path}/${params._id}`,
        params,
        true,
        false
      )) as ResponseObj;
      if (response.success) {
        const index = users.value.findIndex(
          (user: User) => user._id === params._id
        );
        if (index !== -1) {
          users.value[index] = response.data;
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
    totalItems,
    doListUsers,
    doUpdateUser,
    doDeleteUser,
    listForSelect,
  };
});
