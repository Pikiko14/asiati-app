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
          :rules="[val => !!val || 'Este campo es requerido', val => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Ingresa un correo electrónico valido']">
        </q-input>
      </div>
      <div class="col-12">
        <label for="">Contraseña</label>
        <q-input :type="showPassword ? 'text' : 'password'" v-model="loginData.password" placeholder="**********"
          outlined rounded
          :rules="[val => !!val || 'Este campo es requerido', val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(val) || 'Ingresa una contraseña valida']">
          <template v-slot:append>
            <q-btn @click="showPassword = !showPassword" flat dense rounded icon="img:images/eye.svg"></q-btn>
          </template>
        </q-input>
      </div>
      <div class="col-12 text-right">
        <span @click="recoveryPassword = true" class="text-primary text-weight-medium font-12 cursor-pointer">Olvide mi
          contraseña</span>
      </div>
      <div class="col-12 q-mt-xl">
        <q-btn rounded size="12pt" label="Iniciar sesión" no-caps unelevated color="primary" class="full-width"
          type="submit"></q-btn>
      </div>
    </q-form>

    <!-- Recovery password -->
    <q-dialog v-model="recoveryPassword">
      <q-card class="round-10 recovery-card q-pa-lg">
        <q-card-section>
          <RecoveryFormVue :token="token" @close-modal="recoveryPassword = false" />
        </q-card-section>
      </q-card>
    </q-dialog>
    <!--End recovery password-->
  </section>
</template>
<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import { LoginInterface } from 'src/models/models';
import RecoveryFormVue from './recoveryForm.vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginFormView',
  emits: ['do-login'],
  props: {
    loading: Boolean
  },
  components: {
    RecoveryFormVue
  },
  setup(props, { emit }) {
    // references
    const route = useRoute()
    const router = useRouter()
    const token = ref<string>('')
    const showPassword = ref<boolean>(false)
    const loginData = ref<LoginInterface>({
      username: null,
      password: null
    })
    const recoveryPassword = ref<boolean>(false)

    // methods
    const onSubmit = () => {
      emit('do-login', loginData.value)
    }

    // hook
    onBeforeMount(() => {
      if (route.path === '/recovery') {
        if (!route.query.token) router.push({ name: 'login' })
        if (route.query.token) {
          recoveryPassword.value = true
          token.value = route.query.token as string
        }
      }
    })

    return {
      token,
      onSubmit,
      loginData,
      showPassword,
      recoveryPassword,
    }
  }
})
</script>
