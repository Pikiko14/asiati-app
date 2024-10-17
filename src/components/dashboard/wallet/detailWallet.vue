<template>
  <div class="full-weidth row">
    <div class="col-12">
      <q-markup-table class="q-pa-none shadow-0">
        <thead>
          <tr>
            <th class="text-left">Fecha</th>
            <th class="text-left">Tipo</th>
            <th class="text-left"># Guía</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">
              {{ wallet.date?.substring(0, 10) }}
            </td>
            <td class="text-left">
              {{ wallet.type ?? '-' }}
            </td>
            <td class="text-left">
              {{ wallet.guide_number ?? 'Sin guía' }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      <q-markup-table class="q-pa-none shadow-0 q-mt-md">
        <thead>
          <tr>
            <th class="text-left">Orden id</th>
            <th class="text-center">Monto</th>
            <th class="text-center">Monto previo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">
              {{ wallet.order_id ?? '-' }}
            </td>
            <td class="text-center">
              {{ utils.formatPrice(wallet.amount) }}
            </td>
            <td class="text-center">
              {{ utils.formatPrice(wallet.preview_amount) }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
    <div class="col-12 q-mt-md">
      <span class="font-12 text-primary text-weight-bold text-primary">Número de guía:</span> {{ wallet?.guide_number }}
    </div>
    <div class="col-12 q-mt-md">
      <span class="font-12 text-primary text-weight-bold text-primary">Descripción:</span> {{ wallet?.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Utils } from 'src/utils/utils';
import { WalletInterface } from 'src/models/models';

export default defineComponent({
  name: 'DetailWalletComponent',
  props: {
    wallet: {
      type: Object as () => WalletInterface,
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
