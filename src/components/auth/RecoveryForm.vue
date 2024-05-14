<template>
  <div class="row d-flex align-center justify-center">
    <div class="col-12 text-center text-h5 text-weight-semi-bold">
      <span v-if="!token">
        ¿Olvidaste tu contraseña?
      </span>
      <span v-else>Ingresa tu nueva contraseña</span>
    </div>
    <div class="col-12 q-mt-lg">
      <q-form class="row full-width" @submit="onSubmit">
        <div class="col-12" v-if="!token">
          <q-input v-model="email" placeholder="Ingresa tu correo electrónico" outlined rounded
            :rules="[val => !!val || 'Este campo es requerido', val => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Ingresa un correo electrónico valido']">
          </q-input>
        </div>
        <div class="col-12" v-if="token">
          <q-input :type="showPassword ? 'text' : 'password'" v-model="recoveryData.password" placeholder="**********"
            outlined rounded
            :rules="[val => !!val || 'Este campo es requerido', val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(val) || 'Ingresa una contraseña valida']">
            <template v-slot:append>
              <q-btn @click="showPassword = !showPassword" flat dense rounded icon="img:images/eye.svg"></q-btn>
            </template>
          </q-input>
        </div>
        <div class="col-12" v-if="token">
          <q-input :type="showPassword ? 'text' : 'password'" v-model="recoveryData.confirmation_password"
            placeholder="**********" outlined rounded
            :rules="[val => !!val || 'Este campo es requerido', val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(val) || 'Ingresa una contraseña valida']">
            <template v-slot:append>
              <q-btn @click="showPassword = !showPassword" flat dense rounded icon="img:images/eye.svg"></q-btn>
            </template>
          </q-input>
        </div>
        <div class="col-12 q-mt-sm">
          <q-btn :loading="loading" rounded size="12pt" label="Recuperar contraseña" no-caps unelevated color="primary"
            class="full-width" type="submit"></q-btn>
        </div>
        <div class="col-12 q-mt-lg">
          <q-btn @click="closeModal" flat rounded size="12pt" no-caps unelevated color="trasnparent" class="full-width">
            <q-icon style="margin-top: -4px" size="15pt" class="float-left" name="img:/images/back.svg"></q-icon>
            <span class="q-pl-sm text-accent">Regresar a Iniciar sesión</span>
          </q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAuthStore } from 'src/stores/auth'
import { notification } from 'src/boot/notification'
import { RecoveryPasswordInterface } from 'src/models/models'
import router from 'src/router'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RecoveryForm',
  props: {
    token: {
      type: String,
      required: false,
      default: () => ''
    }
  },
  emits: ['close-modal'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    // references
    const recoveryData = ref<RecoveryPasswordInterface>({
      password: '',
      token: props.token,
      confirmation_password: ''
    })
    const router = useRouter()
    const email = ref<string>('')
    const authStore = useAuthStore()
    const loading = ref<boolean>(false)
    const showPassword = ref<boolean>(false)

    // methods
    const closeModal = () => {
      emit('close-modal')
    }

    const onSubmit = async () => {
      loading.value = true
      if (props.token) {
        await changePassword()
        return false
      }
      try {
        const response = await authStore.initRecoveryPassword({
          email: email.value
        })
        if (response?.success) {
          notification('positice', response?.message as string, 'primary')
          closeModal()
        }
      } catch (error) {

      } finally {
        loading.value = false
      }
    }

    const changePassword = async () => {
      try {
        const response = await authStore.doChangePassword(recoveryData.value)
        if (response?.success) {
          notification('positice', response?.message as string, 'primary')
          closeModal()
          router.push({ name: 'login' })
        }
      } catch (error) {
      } finally {
        loading.value = false
      }
    }

    // lify cycle

    // return data
    return {
      email,
      loading,
      onSubmit,
      closeModal,
      recoveryData,
      showPassword,

    }
  }
})
</script>
