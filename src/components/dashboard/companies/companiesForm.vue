<template>
  <q-form class="row" @submit="doSaveUser">
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Nombre de la tienda</label>
      <q-input dense v-model="company.name" placeholder="Ingrese un nombre" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 60 || '60 caracteres maximos', val => /^[a-zA-Z\s]+$/.test(val) || 'Ingresa un nombre valido']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Responsable</label>
      <q-select dense v-model="company.responsable" label="Seleccione un responsable" :options="users" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido']">
      </q-select>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">URL</label>
      <q-input dense v-model="company.url" placeholder="Ingrese un nombre" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 90 || '90 caracteres maximos', val => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(val) || 'Ingresa una url valida']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Identificador meta</label>
      <q-input dense v-model="company.meta_app_identifier" placeholder="Ingrese su nombre completo" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 90 || '90 caracteres maximos']">
      </q-input>
    </div>
    <div class="col-12">
      <label for="" class="text-weight-semi-bold">Clave secreta meta</label>
      <q-input dense v-model="company.meta_app_secret" placeholder="Ingrese su nombre completo" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 90 || '90 caracteres maximos']">
      </q-input>
    </div>
  </q-form>
</template>

<script lang="ts">
import { useUsersStore } from 'src/stores/users'
import { Company, User } from 'src/models/models'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  name: 'CompaniesFormComponent',
  setup() {
    // references
    const company = ref<Company>({
      name: '',
      url: '',
      responsable: '',
      meta_app_secret: '',
      meta_app_identifier: '',
    })
    const usersStore = useUsersStore()

    // computed
    const users = computed(() => {
      return usersStore.users.map((user: User) => {
        return {
          label: `${user.name} ${user.last_name}`,
          value: user._id
        }
      })
    })

    // methods
    const doSaveUser = () => {
      alert(123)
    }

    const listUsersForSelect = async () => {
      try {
        await usersStore.listForSelect()
      } catch (error) {

      }
    }

    // lifecycle
    onBeforeMount(async () => {
      await listUsersForSelect();
    })

    // return
    return {
      users,
      company,
      doSaveUser
    }
  }
})
</script>import { Company } from 'src/models/models'
, ref
