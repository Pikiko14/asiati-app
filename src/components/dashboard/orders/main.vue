<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :permission="'create-users'" :title="'Ordenes'" :btnLabel="'Importar'" @open-modal="openModal" />
    <!--end header section-->

    <!--table section-->
    <TableAsiati permission-edit="edit-business" permission-delete="delete-business" :rows="rows" :columns="orders"
      :total-items="totalItems" @do-delete="doDelete" @do-edit="doEdit" />
    <!--end table section-->

    <!--Modal section-->
    <q-dialog v-model="openModalImport">
      <modalCard :title="'Importar ordenes'">
        <template v-slot:body>
          <importForm @close-modal="openModal" />
        </template>
      </modalCard>
    </q-dialog>
    <!--End modal section-->
  </section>
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import { useRoute } from 'vue-router';
import importForm from './importForm.vue';
import modalCard from '../partials/modalCard.vue';
import { OrdersInterface } from 'src/models/models';
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
import HeaderComponent from '../partials/headers.vue';
import TableAsiati from '../partials/tableAsiati.vue';
import { useOrdersStore } from 'src/stores/orders';

export default defineComponent({
  name: 'OrdersMainComponent',
  components: {
    HeaderComponent,
    importForm,
    modalCard,
    TableAsiati
  },
  setup() {
    // data
    const rows: any[] = [
      {
        name: 'external_id',
        align: 'left',
        sortable: false,
        label: 'Id externo',
        field: (row: OrdersInterface) => `${row.external_id}`,
      },
      {
        name: 'date',
        align: 'left',
        sortable: false,
        label: 'Fecha',
        field: (row: OrdersInterface) => `${row.date_order}`,
      },
      {
        name: 'phone',
        align: 'left',
        sortable: false,
        label: 'Teléfono',
        field: (row: OrdersInterface) => `${row.phone}`,
      },
      {
        name: 'guide_number',
        align: 'left',
        sortable: false,
        label: '# Guía',
        field: (row: OrdersInterface) => `${row.guide_number}`,
      },
      {
        name: 'guide_status',
        align: 'left',
        sortable: false,
        label: 'Estado guía',
        field: (row: OrdersInterface) => `${row.guide_status}`,
      },
      {
        name: 'freight_value',
        align: 'left',
        sortable: false,
        label: 'Costo envío',
        field: (row: OrdersInterface) => `${row.freight_price}`,
      },
      {
        name: 'total_order',
        align: 'left',
        sortable: false,
        label: 'Total orden',
        field: (row: OrdersInterface) => `${row.total_order}`,
      },
    ];
    const route = useRoute();
    const store = useOrdersStore();
    const openModalImport = ref<boolean>(false);

    // computed
    const orders = computed(() => {
      return store.orders
    });

    const totalItems = computed(() => {
      return store.totalItems
    });

    // methods
    const openModal = () => {
      openModalImport.value = !openModalImport.value
    }

    const doDelete = (id: string) => {
      alert(id)
    }

    const doEdit = (id: string) => {
      alert(id)
    }

    const listOrders = async () => {
      try {
        const page = route.query.page || 1;
        const search = route.query.search || '';
        const perPage = route.query.perPage || 12;
        const query = `?page=${page}&search=${search}&perPage=${perPage}`;
        await store.doListOrders(query);
      } catch (error) {
      }
    }

    // hoks
    onBeforeMount(async () => {
      await listOrders();
    })

    // return
    return {
      rows,
      doEdit,
      orders,
      doDelete,
      openModal,
      totalItems,
      openModalImport
    }
  }
})
</script>
