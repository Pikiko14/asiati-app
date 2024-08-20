<template>
  <q-page padding>
    <WalletMainComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WalletMainComponent from 'src/components/dashboard/wallet/main.vue';

export default defineComponent({
  name: 'WalletMainPage',
  components: {
    WalletMainComponent
  }
})
</script>
