<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :title="'Dashboard Financiero'" @filter-by-date="doFilterByDate"
      @filter-by-company="doFilterByCompany" />
    <!--end header section-->

    <!--Main section-->
    <MainDashboardComponent class="q-mt-xl" />
    <!--end Main section-->
  </section>
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount } from 'vue'
import HeaderComponent from './partials/headers.vue';
import { useCompaniesStore } from 'src/stores/companies';
import MainDashboardComponent from 'src/components/dashboard/main/main.vue';

export default defineComponent({
  name: 'MainComponent',
  components: {
    HeaderComponent,
    MainDashboardComponent
  },
  setup() {
    // references
    const companiesStore = useCompaniesStore()

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

    const doFilterByCompany = (id: string) => {
      alert(id)
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
      doFilterByDate,
      doFilterByCompany
    }
  }
})
</script>
