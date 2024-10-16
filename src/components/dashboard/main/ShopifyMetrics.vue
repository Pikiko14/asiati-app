<template>
  <div class="grid-container">
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/operation.svg'" :title="'Operación'"
        :amount="ordersMetrics.shopify.totalOrderShopify ?? 0" :label="'Pedidos Shopify'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/operation.svg'" :title="'Operación'"
        :amount="ordersMetrics.shopify.totalShopify ?? 0" :label="'Total Shopify'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import MainCard from '../partials/mainCard.vue';
import { useCompaniesStore } from 'src/stores/companies';

export default defineComponent({
  name: 'ShopifyMetricsComponent',
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
      ordersMetrics,
    }
  }
})
</script>
