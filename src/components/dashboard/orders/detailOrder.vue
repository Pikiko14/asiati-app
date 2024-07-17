<template>
  <div class="full-weidth row">
    <div class="col-12">
      <q-markup-table class="q-pa-none shadow-0">
        <thead>
          <tr>
            <th class="text-left">Fecha</th>
            <th class="text-left">Teléfono</th>
            <th class="text-center"># Guía</th>
            <th class="text-center">Estado guía</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">
              {{ order.date_order }}
            </td>
            <td class="text-left">
              {{ order.phone }}
            </td>
            <td class="text-center">
              {{ order.guide_number ?? 'Sin guía' }}
            </td>
            <td class="text-center">
              {{ order.guide_status ?? 'Sin guía' }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      <q-markup-table class="q-pa-none shadow-0 q-mt-md">
        <thead>
          <tr>
            <th class="text-left">Departamento</th>
            <th class="text-left">Ciudad</th>
            <th class="text-left">Transportadora</th>
            <th class="text-left">Tienda</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">
              {{ order.province }}
            </td>
            <td class="text-left">
              {{ order.city }}
            </td>
            <td class="text-left">
              {{ order.order_conveyor }}
            </td>
            <td class="text-left">
              {{ order.company?.name }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
    <div class="col-12 q-mt-md">
      <span class="font-12 text-primary text-weight-bold text-primary">Productos:</span> {{ order?.products }} | X {{
        order.quantity }} Und
    </div>
    <div class="col-12 q-mt-md">
      <span class="font-12 text-primary text-weight-bold text-primary">Nota:</span> {{ order?.order_notes }}
    </div>
    <div class="col-12 q-mt-md">
      <q-markup-table class="q-pa-none shadow-0 q-mt-md">
        <thead>
          <tr>
            <th class="text-center">Total envío</th>
            <th class="text-center">Total orden</th>
            <th class="text-center">Total devolución</th>
            <th class="text-center">Total ganancia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">
              {{ utils.formatPrice(parseInt(order.freight_price)) }}
            </td>
            <td class="text-center">
              {{ utils.formatPrice(parseInt(order.total_order)) }}
            </td>
            <td class="text-center">
              {{ order.return_freight_cost > 0 ? utils.formatPrice(parseInt(order.return_freight_cost)) : '$0' }}
            </td>
            <td class="text-center">
              {{ order.order_profit > 0 ? utils.formatPrice(parseInt(order.order_profit)) : '$0' }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { OrdersInterface } from 'src/models/models';
import { Utils } from 'src/utils/utils';

export default defineComponent({
  name: 'DetailOrdersComponent',
  props: {
    order: {
      type: Object as () => OrdersInterface,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    // data
    const utils = new Utils('oders')

    return {
      utils
    }
  }
})
</script>
