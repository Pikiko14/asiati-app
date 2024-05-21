<template>
  <div class="grid-container">
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="metaMetrics.spend" :label="'Gasto de campaña'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="metaMetrics.impressions" :isPrice="false" :label="'Impresiones totales'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="metaMetrics.clicks" :isPrice="false" :label="'Click totales'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="0" :label="'Pedidos entregados'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/yellow-calculator.svg'" :title="'Meta'" :amount="0"
        :label="'% Recaudo sobre la inversión'" :isYellow="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import MainCard from '../partials/mainCard.vue';
import { useCompaniesStore } from 'src/stores/companies';

export default defineComponent({
  name: 'MainDashboardComponent',
  components: {
    MainCard
  },
  setup() {
    // references
    const companiesStore = useCompaniesStore()

    // computed
    const metaMetrics = computed(() => {
      return companiesStore.metrics
    })

    // return data
    return {
      metaMetrics
    }
  }
})
</script>
