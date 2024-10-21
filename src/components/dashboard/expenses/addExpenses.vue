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
    <div class="col-12">
      <label for="" class="text-weight-semi-bold">Tienda</label>
      <q-select :options="companies" map-options emit-value dense v-model="expense.company" label="Selecciona la tienda"
        outlined rounded :rules="[val => !!val || 'Este campo es requerido']">
      </q-select>
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
import { notification } from 'src/boot/notification';
import { useExpensesStore } from 'src/stores/expenses';
import { useCompaniesStore } from 'src/stores/companies'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { Company, ExpenseInterface, ResponseObj } from 'src/models/models'

export default defineComponent({
  name: 'AddExpensesComponent',
  emits: ['do-save-expense'],
  props: {
    event: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props, { emit }) {
    // references
    const loading = ref(false);
    const expensesStore = useExpensesStore();
    const companiesStore = useCompaniesStore();
    const expense = ref<ExpenseInterface>({
      amount: 0,
      title: '',
      start: '',
      end: '',
      company: ''
    });

    // computed
    const companies = computed(() => {
      if (companiesStore.companies.length > 0) {
        return companiesStore.companies.map((company: Company) => {
          return {
            label: `${company.name}`,
            value: company._id
          }
        })
      }
      return []
    })

    // methods
    const doSaveExpense = async () => {
      loading.value = true
      if (expense.value._id) {
        doUpdateExpense()
        return true
      }
      try {
        const response = await expensesStore.saveExpenses(expense.value) as ResponseObj;
        if (response.success) {
          notification('positive', response.message, 'primary')
          expense.value.id = response.data._id
          expense.value._id = response.data._id
          emit('do-save-expense', expense.value)
        }
      } catch (error) {
      } finally {
        loading.value = false
      }
    }

    const listCompanies = async () => {
      try {
        await companiesStore.listForSelect()
      } catch (error) {

      }
    }

    // do update
    const doUpdateExpense = async () => {
      try {
        const response = await expensesStore.updateExpense(expense.value) as ResponseObj
        if (response.success) {
          notification('positive', response.message, 'primary')
          emit('do-save-expense', expense.value)
        }
      } catch (error) {
      } finally {
        loading.value = false
      }
    }

    // hook
    onBeforeMount(async () => {
      if (companies.value.length === 0) {
        await listCompanies()
      }
      if (props.event.id) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expense.value = props.event as any
      }
    })

    // return
    return {
      expense,
      loading,
      companies,
      doSaveExpense
    }
  }
})
</script>
