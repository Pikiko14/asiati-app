<template>
  <q-form class="row" @submit="doSaveUser">
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Nombre completo</label>
      <q-input dense v-model="user.name" placeholder="Ingrese su nombre completo" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 60 || '60 caracteres maximos']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Tipo de usuario</label>
      <q-input dense v-model="user.name" placeholder="Ingresa tu correo electrónico" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 60 || '60 caracteres maximos']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Correo</label>
      <q-input dense v-model="user.email" placeholder="Ingrese su correo electrónico" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Ingresa un correo electrónico valido']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Teléfono</label>
      <q-input dense v-model="user.phone" placeholder="Ingrese un numero telefónico" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 15 || '15 caracteres maximos']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Contraseña</label>
      <q-input dense :type="showPassword ? 'text' : 'password'" v-model="user.password"
        placeholder="Ingrese una contraseña segura" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(val) || 'Ingresa una contraseña valida']">
        <template v-slot:append>
          <q-btn @click="showPassword = !showPassword" flat dense rounded icon="img:images/eyegreen.svg"></q-btn>
        </template>
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Repetir contraseña</label>
      <q-input dense :type="showPassword ? 'text' : 'password'" v-model="user.confirmation_password"
        placeholder="Repita la contraseña previamente ingresada" outlined rounded
        :rules="[val => val === user.password || 'No coinciden las contraseñas', val => !!val || 'Este campo es requerido', val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(val) || 'Ingresa una contraseña valida']">
        <template v-slot:append>
          <q-btn @click="showPassword = !showPassword" flat dense rounded icon="img:images/eyegreen.svg"></q-btn>
        </template>
      </q-input>
    </div>
    <div class="col-12 col-md-6 q-mt-xl" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <q-btn v-close-popup label="Cancelar" color="info" no-caps rounded outline class="full-width"></q-btn>
    </div>
    <div class="col-12 col-md-6  q-mt-xl" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <q-btn type="submit" unelevated label="Crear usuario" color="primary" no-caps rounded class="full-width"></q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { User, UserRole } from 'src/models/models'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'UserFormComponent',
  emits: ['close-modal'],
  setup(props, { emit }) {
    // ref
    const showPassword = ref<boolean>(false)
    const user = ref<User>({
      username: '',
      password: '',
      email: '',
      role: UserRole.CEO,
      scopes: [],
      is_active: true,
      name: '',
      last_name: '',
      confirmation_password: '',
      phone: ''
    })

    // methods
    const doSaveUser = () => {
      console.log(user.value)
      emit('close-modal')
    }

    // return
    return {
      user,
      doSaveUser,
      showPassword
    }
  },
})
</script>
