<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :permission="'create-wallet'" :title="'Cartera'" :btnLabel="'Importar'" @open-modal="openModal" />
    <!--end header section-->

    <!--table section-->
    <TableAsiati :permissionShow="'list-orders'" :rows="rows" :columns="wallets" :total-items="totalItems"
      @do-show="doShow" />
    <!--end table section-->

    <!--Modal section-->
    <q-dialog v-model="openModalImport">
      <ModalCard :title="'Importar cartera'">
        <template v-slot:body>
          <FormImport @close-modal="openModal" />
        </template>
      </ModalCard>
    </q-dialog>
    <!--End modal section-->

    <!--Modal section-->
    <q-dialog v-model="openWalletDetail">
      <modalCard :title="`Detalles de la orden ${wallet._id ? wallet.external_id : ''}`">
        <template v-slot:body>
          <DetailWallet :wallet="wallet" />
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
import FormImport from './formImport.vue';
import DetailWallet from './detailWallet.vue';
import ModalCard from '../partials/modalCard.vue';
import { useWalletsStore } from 'src/stores/wallet';
import HeaderComponent from '../partials/headers.vue';
import TableAsiati from '../partials/tableAsiati.vue';
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
import { WalletInterface, WalletTypeMovement } from 'src/models/models';

export default defineComponent({
  name: 'WalletMainComponent',
  components: {
    ModalCard,
    FormImport,
    TableAsiati,
    HeaderComponent,
    DetailWallet
  },
  setup() {
    // references
    const rows: any[] = [
      {
        name: 'external_id',
        align: 'left',
        sortable: false,
        label: 'Id externo',
        field: (row: WalletInterface) => `${row.external_id}`,
      },
      {
        name: 'company',
        align: 'left',
        sortable: false,
        label: 'Tienda',
        field: (row: WalletInterface) => `${row.company?.name}`,
      },
      {
        name: 'date',
        align: 'left',
        sortable: false,
        label: 'Fecha',
        field: (row: WalletInterface) => `${row.date ? row.date.substring(0, 10) : '-'}`,
      },
      {
        name: 'type',
        align: 'left',
        sortable: false,
        label: 'Tipo',
        field: (row: WalletInterface) => `${row.type}`,
      },
      {
        name: 'amount',
        align: 'center',
        sortable: false,
        label: 'Monto',
        field: (row: WalletInterface) => `${utils.formatPrice(row.amount)}`,
      },
      {
        name: 'amount_preview',
        align: 'center',
        sortable: false,
        label: 'Monto previo',
        field: (row: WalletInterface) => `${utils.formatPrice(row.preview_amount)}`,
      },
      {
        name: 'order_id',
        align: 'left',
        sortable: false,
        label: 'Orden id',
        field: (row: WalletInterface) => `${row.order_id ?? '-'}`,
      },
      {
        name: 'guide_number',
        align: 'left',
        sortable: false,
        label: 'N° Guía',
        field: (row: WalletInterface) => `${row.guide_number ?? '-'}`,
      },
      {
        name: 'option',
        align: 'center',
        sortable: false,
        label: '',
      },
    ];
    const wallet = ref<WalletInterface>({
      amount: 0,
      date: '',
      preview_amount: 0,
      type: WalletTypeMovement.CREDIT,
      order_id: '',
      guide_number: '',
      external_id: '',
      description: '',
    });
    const route = useRoute();
    const utils = new Utils('orders');
    const walletsStore = useWalletsStore();
    const openModalImport = ref<boolean>(false);
    const openWalletDetail = ref<boolean>(false);

    // computed
    const wallets = computed(() => {
      return walletsStore.wallets
    });

    const totalItems = computed(() => {
      return walletsStore.totalItems
    });

    // methods
    const openModal = async () => {
      openModalImport.value = !openModalImport.value;
      if (!openModalImport.value) {
        await listWalletMovements()
      }
    }

    const listWalletMovements = async () => {
      try {
        const page = route.query.page || 1;
        const search = route.query.search || '';
        const perPage = route.query.perPage || 12;
        const query = `?page=${page}&search=${search}&perPage=${perPage}`;
        await walletsStore.doListWallets(query);
      } catch (error) {
      }
    }

    const doShow = (data: WalletInterface) => {
      wallet.value = data;
      openWalletDetail.value = !openWalletDetail.value
    }

    // hook
    onBeforeMount(async () => {
      await listWalletMovements();
    })

    return {
      rows,
      wallet,
      doShow,
      wallets,
      openModal,
      totalItems,
      openModalImport,
      openWalletDetail,
    }
  }
})
</script>
