<template>
  <q-form class="row" @submit="doSaveUser">
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Nombre de la tienda</label>
      <q-input dense v-model="company.name" placeholder="Ingrese un nombre" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 90 || '90 caracteres maximos', val => /^[^';]+$/.test(val) || 'Ingresa un nombre valido']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Responsable</label>
      <q-select emit-value map-options dense v-model="company.responsable" label="Seleccione un responsable"
        :options="users" outlined rounded :rules="[val => !!val || 'Este campo es requerido']">
      </q-select>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">URL</label>
      <q-input dense v-model="company.url" placeholder="Ingrese un nombre" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 250 || '250 caracteres maximos', val => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(val) || 'Ingresa una url valida']">
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
    <div class="col-12 col-md-6 q-mt-xl" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <q-btn v-close-popup label="Cancelar" color="info" no-caps rounded outline class="full-width"></q-btn>
    </div>
    <div class="col-12 col-md-6  q-mt-xl" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <q-btn :loading="loading" type="submit" unelevated :label="!company._id ? 'Crear tienda' : 'Editar tienda'"
        color="primary" no-caps rounded class="full-width"></q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { useUsersStore } from 'src/stores/users'
import { notification } from 'src/boot/notification'
import { useCompaniesStore } from 'src/stores/companies'
import { Company, ResponseObj, User } from 'src/models/models'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  name: 'CompaniesFormComponent',
  emits: ['close-modal'],
  setup(props, { emit }) {
    // references
    const company = ref<Company>({
      name: '',
      url: '',
      responsable: '',
      meta_app_secret: '',
      meta_app_identifier: '',
    })
    const usersStore = useUsersStore()
    const loading = ref<boolean>(false)
    const companiesStore = useCompaniesStore()

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
    const doSaveUser = async () => {
      loading.value = true
      try {
        const response = await companiesStore.doSaveCompany(company.value) as ResponseObj
        if (response.success) {
          notification('positive', response.message as string, 'primary')
          emit('close-modal')
          clearCompany()
        }
      } catch (error) {

      } finally {
        loading.value = false
      }
    }

    const clearCompany = () => {
      company.value = {
        name: '',
        url: '',
        responsable: '',
        meta_app_secret: '',
        meta_app_identifier: '',
      }
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
      loading,
      doSaveUser
    }
  }
})
</script>import { Company } from 'src/models/models'
, ref
