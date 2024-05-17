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
        <CompaniesForm @close-modal="openModal" />
      </template>
    </ModalCard>
  </q-dialog>
  <!--End modal section-->
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import { useRoute } from 'vue-router';
import { Company } from 'src/models/models';
import CompaniesForm from './companiesForm.vue';
import ModalCard from '../partials/modalCard.vue';
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import HeaderComponent from '../partials/headers.vue';
import TableAsiati from '../partials/tableAsiati.vue';
import { useCompaniesStore } from 'src/stores/companies';

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
    const route = useRoute()
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
    const companiesStore = useCompaniesStore()
    const openModalCompanies = ref<boolean>(false)

    // computed
    const companies = computed(() => {
      return companiesStore.companies
    })

    const totalItems = computed(() => {
      return companiesStore.totalItems
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

    const listCompanies = async () => {
      try {
        const page = route.query.page || 1
        const search = route.query.search || ''
        const perPage = route.query.perPage || 12
        const query = `?page=${page}&search=${search}&perPage=${perPage}`
        await companiesStore.doListCompanies(query)
      } catch (error) {

      }
    }

    // life cycle
    onBeforeMount(() => {
      listCompanies()
    })

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
