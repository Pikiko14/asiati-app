<template>
  <section class="login-form row background">
    <div class="col-12 col-md-4 mobile-overflow">
      <LoginForm :loading="loading" @do-login="doLogin" key="login-form" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginForm from './LoginForm.vue';
import { LoginInterface } from 'src/models/models';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginComponent',
  components: {
    LoginForm
  },
  setup() {
    // references
    const router = useRouter()
    const authStore = useAuthStore()
    const loading = ref<boolean>(false)

    // methods
    const doLogin = async (params: LoginInterface) => {
      try {
        const response = await authStore.doLogin(params)
        if (response && response.success === true) {
          router.push({
            name: 'home',
          })
        }
      } catch (error) {
      }
    }

    return {
      doLogin,
      loading,
    }
  }
})
</script>
