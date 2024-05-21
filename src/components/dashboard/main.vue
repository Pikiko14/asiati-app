<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :title="'Dashboard Financiero'" @filter-by-date="doFilterByDate"
      @filter-by-company="doFilterByCompany" />
    <!--end header section-->

    <!--Main section-->
    <MainDashboardComponent class="q-mt-xl" />
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
  </section>
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import Campaigns from './main/campaigns.vue';
import ModalCard from './partials/modalCard.vue';
import HeaderComponent from './partials/headers.vue';
import { useCompaniesStore } from 'src/stores/companies';
import { CampaignsInterface, ResponseObj } from 'src/models/models';
import { defineComponent, onBeforeMount, onBeforeUnmount, ref } from 'vue';
import MainDashboardComponent from 'src/components/dashboard/main/main.vue';

export default defineComponent({
  name: 'MainComponent',
  components: {
    Campaigns,
    ModalCard,
    HeaderComponent,
    MainDashboardComponent
  },
  setup() {
    // references
    const companySelected = ref<string>()
    const openCampaignModal = ref<boolean>()
    const companiesStore = useCompaniesStore()
    const campaigns = ref<CampaignsInterface[]>([])

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

    // lifecycles
    onBeforeMount(async () => {
      await listCompanies()
    })

    onBeforeUnmount(() => {
      companiesStore.clearCompanies()
    })

    // return
    return {
      campaigns,
      doFilterByDate,
      companySelected,
      doFilterByCompany,
      openCampaignModal,
    }
  }
})
</script>
