<template>
  <q-page padding>
    <!-- content -->
    <ExpensesComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExpensesComponent from 'src/components/dashboard/expenses/expenses.vue';

export default defineComponent({
  name: 'ExpensesPage',
  components: {
    ExpensesComponent
  }
})
</script>
