<template>
  <q-page padding>
    <!-- content -->
    <MainCompanies />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainCompanies from 'src/components/dashboard/companies/mainCompanies.vue';

export default defineComponent({
  name: 'CompaniesPage',
  components: {
    MainCompanies
  }
})
</script>
