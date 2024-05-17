<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :title="'Dashboard Financiero'" @filter-by-date="doFilterByDate"
      @filter-by-company="doFilterByCompany" />
    <!--end header section-->
  </section>
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import HeaderComponent from './partials/headers.vue';
import { useCompaniesStore } from 'src/stores/companies';

export default defineComponent({
  name: 'MainComponent',
  components: {
    HeaderComponent
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

    // return
    return {
      doFilterByDate,
      doFilterByCompany
    }
  }
})
</script>
