<template>
  <q-page padding>
    <ProductMainComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductMainComponent from 'src/components/dashboard/products/main.vue';

export default defineComponent({
  name: 'ProductPage',
  components: {
    ProductMainComponent
  }
})
</script>
