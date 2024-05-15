import { boot } from "quasar/wrappers";
import { useAuthStore } from "src/stores/auth";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.config.globalProperties.$hasPermission = hasPermission;
});

const authStore = useAuthStore();

const hasPermission = (scope: string) => {
  const { scopes } = authStore.user;
  if (!scopes?.includes(scope)) {
    return false;
  }
  return true;
};
