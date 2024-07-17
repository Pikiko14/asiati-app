<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :permission="'create-users'" :title="'Ordenes'" :btnLabel="'Importar'" @open-modal="openModal" />
    <!--end header section-->

    <!--table section-->
    <TableAsiati permission-edit="edit-orders" :permissionShow="'list-orders'" permission-delete="delete-orders"
      :rows="rows" :columns="orders" :total-items="totalItems" @do-delete="doDelete" @do-edit="doEdit"
      @do-show="doShow" />
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
import { Utils } from 'src/utils/utils';
import importForm from './importForm.vue';
import modalCard from '../partials/modalCard.vue';
import { useOrdersStore } from 'src/stores/orders';
import { OrdersInterface } from 'src/models/models';
import HeaderComponent from '../partials/headers.vue';
import TableAsiati from '../partials/tableAsiati.vue';
import { computed, defineComponent, onBeforeMount, ref } from 'vue';

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
        align: 'center',
        sortable: false,
        label: 'Costo envío',
        field: (row: OrdersInterface) => `${utils.formatPrice(row.freight_price as number)}`,
      },
      {
        name: 'total_order',
        align: 'center',
        sortable: false,
        label: 'Total orden',
        field: (row: OrdersInterface) => `${utils.formatPrice(row.total_order as number)}`,
      },
      {
        name: 'option',
        align: 'center',
        sortable: false,
        label: '',
      },
    ];
    const utils = new Utils('orders');
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

    const doShow = (order: OrdersInterface) => {
      console.log(order)
    }

    // hoks
    onBeforeMount(async () => {
      await listOrders();
    })

    // return
    return {
      rows,
      doEdit,
      doShow,
      orders,
      doDelete,
      openModal,
      totalItems,
      openModalImport
    }
  }
})
</script>
