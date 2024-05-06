<template>
  <q-page class="login-page">
    <Login />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Login from 'src/components/auth/Login.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    Login
  },
  setup() {
    return {}
  }
})
</script>
