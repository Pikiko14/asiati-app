<template>
  <q-form class="row" @submit="doSaveUser">
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Nombres</label>
      <q-input dense v-model="user.name" placeholder="Ingrese su nombre completo" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 60 || '60 caracteres maximos', val => /^[a-zA-Z\s]+$/.test(val) || 'Ingresa un nombre valido']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Apellidos</label>
      <q-input dense v-model="user.last_name" placeholder="Ingrese su nombre completo" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 60 || '60 caracteres maximos', val => /^[a-zA-Z\s]+$/.test(val) || 'Ingresa un nombre valido']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Tipo de usuario</label>
      <q-select dense v-model="user.role" label="Seleccione un tipo de usuario" :options="typeUsers" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido']">
      </q-select>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Correo</label>
      <q-input dense v-model="user.email" placeholder="Ingrese su correo electrónico" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Ingresa un correo electrónico valido']">
      </q-input>
    </div>
    <div class="col-12 col-md-12">
      <label for="" class="text-weight-semi-bold">Teléfono</label>
      <q-input dense v-model="user.phone" placeholder="Ingrese un numero telefónico" outlined rounded
        :rules="[val => /^\d{1,3}\d{1,14}$/.test(val) || 'Ingresa un número valido', val => !!val || 'Este campo es requerido', val => val.length < 15 || '15 caracteres maximos']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Contraseña</label>
      <q-input dense :type="showPassword ? 'text' : 'password'" v-model="user.password"
        placeholder="Ingrese una contraseña segura" outlined rounded
        :rules="user.password && user.password.length > 0 ? [val => !!val || 'Este campo es requerido', val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(val) || 'Ingresa una contraseña valida'] : []">
        <template v-slot:append>
          <q-btn @click="showPassword = !showPassword" flat dense rounded icon="img:images/eyegreen.svg"></q-btn>
        </template>
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Repetir contraseña</label>
      <q-input dense :type="showPassword ? 'text' : 'password'" v-model="user.confirmation_password"
        placeholder="Repita la contraseña previamente ingresada" outlined rounded
        :rules="user.password && user.password.length > 0 ? [val => val === user.password || 'No coinciden las contraseñas', val => !!val || 'Este campo es requerido', val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#&!*-])[A-Za-z\d$@#&!*-]{8,}$/.test(val) || 'Ingresa una contraseña valida'] : []">
        <template v-slot:append>
          <q-btn @click="showPassword = !showPassword" flat dense rounded icon="img:images/eyegreen.svg"></q-btn>
        </template>
      </q-input>
    </div>
    <div class="col-12" :class="{ 'q-mt-md': !user.password }">
      <label for="" class="text-weight-semi-bold">Permisos</label>
      <q-option-group inline v-model="user.scopes" :options="scopes" color="primary" type="checkbox" />
    </div>
    <div class="col-12 col-md-6 q-mt-xl" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <q-btn v-close-popup label="Cancelar" color="info" no-caps rounded outline class="full-width"></q-btn>
    </div>
    <div class="col-12 col-md-6  q-mt-xl" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <q-btn :loading="loading" type="submit" unelevated label="Crear usuario" color="primary" no-caps rounded
        class="full-width"></q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { useUsersStore } from 'src/stores/users'
import { notification } from 'src/boot/notification'
import { defineComponent, onBeforeMount, ref } from 'vue'
import { ResponseObj, User, UserRole } from 'src/models/models'

export default defineComponent({
  name: 'UserFormComponent',
  emits: ['close-modal'],
  props: {
    userData: {
      type: Object as () => User,
      default: () => {
        return {}
      }
    }
  },
  setup(props, { emit }) {
    // ref
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const typeUsers: any[] = [
      {
        label: 'Administrador',
        value: UserRole.ADMIN
      },
      {
        label: 'Ceo',
        value: UserRole.CEO
      }
    ];
    const usersStore = useUsersStore()
    const loading = ref<boolean>(false)
    const showPassword = ref<boolean>(false)
    const user = ref<User>({
      username: '',
      password: '',
      email: '',
      role: UserRole.CEO,
      scopes: [
        'create-users',
        'list-users',
        'edit-users',
        'delete-users',
        'create-business',
        'list-business',
        'edit-business',
        'delete-business',
        'list-meta-metric'
      ],
      is_active: true,
      name: '',
      last_name: '',
      confirmation_password: '',
      phone: ''
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const scopes: any[] = [
      { label: 'Crear usuarios', value: 'create-users' },
      { label: 'Listar usuarios', value: 'list-users' },
      { label: 'Editar usuarios', value: 'edit-users' },
      { label: 'Eliminar usuarios', value: 'delete-users' },
      { label: 'Crear empresas', value: 'create-business' },
      { label: 'Listar empresas', value: 'list-business' },
      { label: 'Editar empresas', value: 'edit-business' },
      { label: 'Eliminar empresas', value: 'delete-business' },
      { label: 'Listar metricas', value: 'list-meta-metric' }
    ];

    // methods
    const doSaveUser = async () => {
      loading.value = true
      user.value.username = user.value.email.split('@')[0]
      if (user.value._id) {
        await doUpdateUser()
        return true
      }
      try {
        const response = await usersStore.doSaveUser(user.value) as ResponseObj
        if (response.success) {
          notification('positive', response.message as string, 'primary')
          emit('close-modal')
          clearUser()
        }
      } catch (error) {

      } finally {
        loading.value = false
      }
    }

    const doUpdateUser = async () => {
      try {
        const response = await usersStore.doUpdateUser(user.value) as ResponseObj
        if (response.success) {
          notification('positive', response.message as string, 'primary')
          emit('close-modal')
          clearUser()
        }
      } catch (error) {

      } finally {
        loading.value = false
      }
    }

    const clearUser = () => {
      user.value = {
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
      }
    }

    // lifecycle
    onBeforeMount(() => {
      if (props.userData._id) {
        user.value = props.userData
      }
    })

    // return
    return {
      user,
      scopes,
      loading,
      typeUsers,
      doSaveUser,
      showPassword
    }
  },
})
</script>
