<template>
  <!--Header section-->
  <HeaderComponent :permission="'create-business'" :title="'Mis tiendas'" :btnLabel="'Agregar tienda'"
    @open-modal="openModal" />
  <!--end header section-->

  <!--table section-->
  <TableAsiati :rows="rows" :columns="companies" :total-items="totalItems" @do-delete="doDelete" @do-edit="doEdit" />
  <!--end table section-->

  <!--Modal section-->
  <q-dialog v-model="openModalCompanies">
    <ModalCard :title="company._id ? 'Editar tienda' : 'Tienda nueva'">
      <template v-slot:body>
        <CompaniesForm />
      </template>
    </ModalCard>
  </q-dialog>
  <!--End modal section-->
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import { Company } from 'src/models/models';
import CompaniesForm from './companiesForm.vue';
import { useUsersStore } from 'src/stores/users';
import ModalCard from '../partials/modalCard.vue';
import { computed, defineComponent, ref } from 'vue'
import HeaderComponent from '../partials/headers.vue';
import TableAsiati from '../partials/tableAsiati.vue';

export default defineComponent({
  name: 'CompaniesMainComponent',
  components: {
    HeaderComponent,
    TableAsiati,
    CompaniesForm,
    ModalCard
  },
  setup() {
    // refs
    const rows = ref<any[]>([
      {
        name: 'name',
        align: 'left',
        sortable: false,
        label: 'Nombre tienda',
        field: (row: Company) => `${row.name}`,
      },
      {
        name: 'url',
        align: 'left',
        sortable: false,
        label: 'URL',
        field: (row: Company) => `${row.url}`,
      },
      {
        name: 'name',
        align: 'left',
        sortable: false,
        label: 'Responsable',
        field: (row: Company) => `${row.responsable}`,
      },
      {
        name: 'option',
        align: 'center',
        sortable: false,
        label: '',
      },
    ])
    const company = ref<Company>({
      name: '',
      url: '',
      responsable: '',
      meta_app_secret: '',
      meta_app_identifier: '',
    })
    const usersStore = useUsersStore()
    const openModalCompanies = ref<boolean>(false)

    // computed
    const companies = computed(() => {
      return usersStore.users
    })

    const totalItems = computed(() => {
      return usersStore.totalItems
    })

    // methods

    const openModal = () => {
      openModalCompanies.value = !openModalCompanies.value
      company.value = {
        name: '',
        url: '',
        responsable: '',
        meta_app_secret: '',
        meta_app_identifier: '',
      }
    }

    const doEdit = (id: string) => {
      alert(123)
    }

    const doDelete = (id: string) => {
      alert(123)
    }

    // return
    return {
      rows,
      doEdit,
      company,
      doDelete,
      openModal,
      companies,
      totalItems,
      openModalCompanies
    }
  }
})
</script>computed,
