<template>
  <section class="full-width full-height d-flex flex-center items-center">
    <q-form @submit="onSubmit" class="row q-px-xl">
      <div class="col-12 text-center">
        <q-img src="/images/logo.svg" width="200px"></q-img>
      </div>
      <div class="col-12 q-mt-xl text-h4 text-weight-semi-bold text-center">
        Módulo Financiero <br> eCommerce
      </div>
      <div class="col-12 q-mt-xl">
        <label for="">Correo electrónico</label>
        <q-input v-model="loginData.username" placeholder="Ingresa tu correo electrónico" outlined rounded
          :rules="[val => !!val || 'Este campo es requerido', val => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Ingresa un correo electrónico valido']"></q-input>
      </div>
      <div class="col-12">
        <label for="">Contraseña</label>
        <q-input type="password" v-model="loginData.password" placeholder="**********" outlined rounded
          :rules="[val => !!val || 'Este campo es requerido', val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(val) || 'Ingresa una contraseña valida']"></q-input>
      </div>
      <div class="col-12 text-right">
        <span class="text-primary text-weight-medium font-12 cursor-pointer">Olvide mi contraseña</span>
      </div>
      <div class="col-12 q-mt-xl">
        <q-btn rounded size="12pt" label="Iniciar sesión" no-caps unelevated color="primary" class="full-width"
          type="submit"></q-btn>
      </div>
    </q-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { LoginInterface } from 'src/models/models';

export default defineComponent({
  name: 'LoginFormView',
  setup() {
    const loginData = ref<LoginInterface>({
      username: null,
      password: null
    })

    // methods
    const onSubmit = () => {
      console.log(loginData.value)
    }

    return {
      onSubmit,
      loginData
    }
  }
})
</script>
