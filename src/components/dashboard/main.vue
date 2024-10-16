<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :title="'Dashboard Financiero'" @filter-by-date="doFilterByDate"
      @filter-by-company="doFilterByCompany" @open-kpi="openKpi" />
    <!--end header section-->

    <!--Main section-->
    <div class="col-12 q-mt-xl">
      <span class="text-primary text-h5 text-weight-semi-bold">
        Metricas de la campaña
      </span>
    </div>
    <MainDashboardComponent class="q-mt-md" />
    <ActionsViewComponent />

    <div class="col-12 q-mt-xl">
      <span class="text-primary text-h5 text-weight-semi-bold">
        Metricas Shopify
      </span>
    </div>
    <ShopifyMetrics class="q-mt-md" />

    <div class="col-12 q-mt-xl">
      <span class="text-primary text-h5 text-weight-semi-bold">
        Metricas Dropi
      </span>
    </div>
    <OrdersResume class="q-mt-md" />
    <!--end Main section-->

    <!--Modal campains and ads selection-->
    <q-dialog v-model="openCampaignModal">
      <ModalCard :title="'Selector de campaña'">
        <template v-slot:body>
          <Campaigns @close-modal="openCampaignModal = false" :company="companySelected" :campaigns="campaigns" />
        </template>
      </ModalCard>
    </q-dialog>
    <!--End modal campains and ads selection-->

    <!--Modal KPIS-->
    <q-dialog v-model="openModalKpis">
      <ModalCard class="kpis-card" :title="'KPIS'">
        <template v-slot:body>
          <KpisComponent />
        </template>
      </ModalCard>
    </q-dialog>
    <!--End modal campains and ads selection-->
  </section>
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import KpisComponent from './main/kpis.vue';
import Campaigns from './main/campaigns.vue';
import ModalCard from './partials/modalCard.vue';
import OrdersResume from './main/ordersResume.vue';
import HeaderComponent from './partials/headers.vue';
import ShopifyMetrics from './main/ShopifyMetrics.vue';
import { useCompaniesStore } from 'src/stores/companies';
import ActionsViewComponent from './main/actionsView.vue';
import { CampaignsInterface, ResponseObj } from 'src/models/models';
import MainDashboardComponent from 'src/components/dashboard/main/main.vue';
import { computed, defineComponent, onBeforeMount, onBeforeUnmount, ref } from 'vue';

export default defineComponent({
  name: 'MainComponent',
  components: {
    Campaigns,
    ModalCard,
    OrdersResume,
    KpisComponent,
    ShopifyMetrics,
    HeaderComponent,
    ActionsViewComponent,
    MainDashboardComponent
  },
  setup() {
    // references
    const companySelected = ref<string>()
    const openCampaignModal = ref<boolean>()
    const openModalKpis = ref<boolean>(false)
    const companiesStore = useCompaniesStore()
    const campaigns = ref<CampaignsInterface[]>([])

    // computed
    const metaMetrics = computed(() => {
      return companiesStore.metrics
    })

    // methods
    const listCompanies = async () => {
      try {
        await companiesStore.listForSelect()
      } catch (error) {

      }
    }

    const doFilterByDate = (date: any) => {
      console.log(date)
    }

    const doFilterByCompany = async (id: string) => {
      try {
        const response = await companiesStore.listCampaings(id) as ResponseObj
        if (response.success) {
          companySelected.value = id
          campaigns.value = response.data.campains;
          openCampaignModal.value = !openCampaignModal.value;
        }
      } catch (error) {
      }
    }

    const openKpi = () => {
      openModalKpis.value = !openModalKpis.value
    }

    // lifecycles
    onBeforeMount(async () => {
      await listCompanies()
    })

    onBeforeUnmount(() => {
      companiesStore.clearCompanies()
    })

    // return
    return {
      openKpi,
      campaigns,
      metaMetrics,
      openModalKpis,
      doFilterByDate,
      companySelected,
      doFilterByCompany,
      openCampaignModal,
    }
  }
})
</script>
