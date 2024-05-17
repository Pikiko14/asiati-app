<template>
  <q-page padding>
    <MainComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainComponent from 'src/components/dashboard/main.vue';

export default defineComponent({
  name: 'HomePageComponent',
  components: {
    MainComponent
  }
})
</script>
