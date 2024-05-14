<template>
  <div class="row d-flex align-center justify-center">
    <div class="col-12 text-center text-h5 text-weight-semi-bold">
      ¿Olvidaste tu contraseña?
    </div>
    <div class="col-12 q-mt-lg">
      <q-form class="row full-width" @submit="onSubmit">
        <div class="col-12">
          <q-input v-model="email" placeholder="Ingresa tu correo electrónico" outlined rounded
            :rules="[val => !!val || 'Este campo es requerido', val => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Ingresa un correo electrónico valido']">
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

export default defineComponent({
  name: 'RecoveryForm',
  emits: ['close-modal'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    // references
    const email = ref<string>('')
    const authStore = useAuthStore()
    const loading = ref<boolean>(false)

    // methods
    const closeModal = () => {
      emit('close-modal')
    }

    const onSubmit = async () => {
      try {
        const response = await authStore.initRecoveryPassword(email.value)
        console.log(response)
      } catch (error) {

      } finally {
        loading.value = false
      }
    }

    // return data
    return {
      email,
      loading,
      onSubmit,
      closeModal
    }
  }
})
</script>
