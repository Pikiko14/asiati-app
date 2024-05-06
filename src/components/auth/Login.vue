<template>
  <section class="login-form row background">
    <div class="col-12 col-md-4">
      <LoginForm key="login-form" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from './LoginForm.vue';

export default defineComponent({
  name: 'LoginComponent',
  components: {
    LoginForm
  }
})
</script>
