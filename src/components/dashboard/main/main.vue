<template>
  <div class="grid-container">
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Flujo de caja'" :amount="1200" :label="'Inversión en pauta'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Flujo de caja'" :amount="2.46" :label="'Ventas sobre inversión (ROAS)'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Flujo de caja'" :amount="14319999" :label="'Total recaudo'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Flujo de caja'" :amount="8500300" :label="'Pedidos entregados'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/yellow-calculator.svg'" :title="'Flujo de caja'" :amount="27242"
        :label="'% Recaudo sobre la inversión'" :isYellow="true" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard .title="'Operación'" :icon="'img:/images/operation.svg'" :amount="12943800" :label="'Ventas Shopify'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Operación'" :amount="132" :label="'Pedidos generados'" :icon="'img:/images/operation.svg'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Operación'" :amount="156" :label="'Pedidos generados'" :icon="'img:/images/operation.svg'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Operación'" :amount="110" :label="'Pedidos subidos a plataforma'"
        :icon="'img:/images/operation.svg'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Operación'" :amount="70.51" :label="'Efectividad confirmaciones'"
        :icon="'img:/images/operation.svg'" :isGreen="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainCard from '../partials/mainCard.vue';

export default defineComponent({
  name: 'MainDashboardComponent',
  components: {
    MainCard
  }
})
</script>
