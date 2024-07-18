<template>
  <div class="grid-container">
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/operation.svg'" :title="'Operación'" :amount="ordersMetrics.totalMoneyInDropi"
        :label="'Ventas Dropi'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/operation.svg'" :title="'Operación'" :amount="ordersMetrics.collectionDropi"
        :label="'Recaudo Dropi'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/operation.svg'" :is-price="true" :title="'Operacion'"
        :amount="ordersMetrics.totalOrdersDropiDelivered" :label="'Entregado dropi'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/operation.svg'" :is-price="true" :title="'Operacion'"
        :amount="ordersMetrics.totalFreightDelivered" :label="'Flete Entregado'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/operation.svg'" :is-price="true" :title="'Operacion'"
        :amount="ordersMetrics.totalFreight" :label="'Flete esperado'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/operation.svg'" :is-price="true" :title="'Operacion'"
        :amount="ordersMetrics.returnedFreightDropi" :label="'Flete devolución'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/tracking.svg'" :is-price="false" :title="'Tracking'"
        :amount="ordersMetrics.totalDropiOrders" :label="'Pedidos generados'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/tracking.svg'" :is-price="false" :title="'Tracking'"
        :amount="ordersMetrics.deliveredDropiOrders" :isGreen="true" :label="'Pedidos entregados'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/tracking.svg'" :is-price="false" :title="'Tracking'"
        :amount="ordersMetrics.returnedDropiOrders" :label="'Pedidos devueltos'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/tracking.svg'" :is-price="false" :title="'Tracking'"
        :amount="ordersMetrics.pendingDropiOrders" :label="'Pedidos pendientes'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/tracking.svg'" :is-price="false" :title="'Tracking'"
        :amount="ordersMetrics.pendingConfirmationDropiOrders" :label="'Pendientes Confirmación'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/tracking.svg'" :is-price="false" :title="'Tracking'"
        :amount="ordersMetrics.cancelledDropi" :label="'Pedidos Cancelados'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/tracking.svg'" :isGreen="true" :is-price="false" :title="'Tracking'"
        :amount="ordersMetrics.rejectedDropi" :label="'Pedidos Rechazados'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/tracking.svg'" :is-price="false" :title="'Tracking'"
        :amount="ordersMetrics.cancelledAndRejectedOrders" :label="'Cancelados - Rechazados'" />
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
