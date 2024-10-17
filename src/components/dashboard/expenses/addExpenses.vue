<template>
  <q-form class="row" style="max-width: 400px" @submit="doSaveExpense">
    <div class="col-12 col-md-12" :class="{ '': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Descripción</label>
      <q-input dense v-model="expense.title" placeholder="Ingrese la descripción del gasto" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido', val => val.length < 90 || '90 caracteres maximos', val => /^[^';]+$/.test(val) || 'Ingresa un nombre valido']">
      </q-input>
    </div>
    <div class="col-12 col-md-12" :class="{ '': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Monto del gasto</label>
      <q-input type="number" dense v-model.number="expense.amount" placeholder="2500" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Fecha inicio</label>
      <q-input type="date" dense v-model="expense.start" placeholder="2500" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido']">
      </q-input>
    </div>
    <div class="col-12 col-md-6" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Fecha fin</label>
      <q-input type="date" dense v-model="expense.end" placeholder="2500" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido']">
      </q-input>
    </div>
    <div class="col-12 col-md-6 q-mt-xl" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <q-btn v-close-popup label="Cancelar" color="info" no-caps rounded outline class="full-width"></q-btn>
    </div>
    <div class="col-12 col-md-6  q-mt-xl" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <q-btn :loading="loading" type="submit" unelevated label="Guardar" color="primary" no-caps rounded
        class="full-width"></q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ExpenseInterface } from 'src/models/models'

export default defineComponent({
  name: 'AddExpensesComponent',
  emits: ['do-save-expense'],
  setup(props, { emit }) {
    // references
    const loading = ref(false);
    const expense = ref<ExpenseInterface>({
      amount: 0,
      title: '',
      start: '',
      end: ''
    });

    // methods
    const doSaveExpense = () => {
      loading.value = true
      emit('do-save-expense', expense.value)
      loading.value = false
    }

    // return
    return {
      expense,
      loading,
      doSaveExpense
    }
  }
})
</script>
