<template>
  <div class="grid-container">
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Operación'" :amount="ordersMetrics.collectionDropi" :label="'Pedidos Dropi'" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import MainCard from '../partials/mainCard.vue';
import { useCompaniesStore } from 'src/stores/companies';

export default defineComponent({
  name: 'OrdersResumeComponent',
  components: {
    MainCard
  },
  setup() {
    // data
    const companiesStore = useCompaniesStore();

    // computed
    const ordersMetrics = computed(() => {
      return companiesStore.metricsOrders;
    });

    return {
      ordersMetrics
    }
  }
})
</script>
