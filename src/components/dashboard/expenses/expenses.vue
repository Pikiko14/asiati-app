<template>
  <div class="full-width">
    <!--Header section-->
    <HeaderComponent :permission="'create-expenses'" :title="'Gastos operativos'" :btnLabel="'Agregar gasto'"
      @open-modal="openModal" />
    <!--end header section-->

    <!--Calendar app-->
    <ScheduleXCalendar v-if="render" class="window-height q-mt-xl q-pt-xl" :calendar-app="calendarApp" />
    <!--End calendar app-->

    <!--Modal add expenses-->
    <q-dialog v-model="modalExpenses">
      <ModalCard title="Agregar gasto pérativo">
        <template v-slot:body>
          <AddEspenses @do-save-expense="doSaveExpense" />
        </template>
      </ModalCard>
    </q-dialog>
    <!--End modal add expenses-->
  </div>
</template>

<script lang="ts">
import { date } from 'quasar'
import { computed, defineComponent, ref } from 'vue'
import AddEspenses from './addExpenses.vue'
import ModalCard from '../partials/modalCard.vue';
import { ScheduleXCalendar } from '@schedule-x/vue'
import HeaderComponent from '../partials/headers.vue'
import {
  createCalendar,
  createViewMonthAgenda,
  createViewMonthGrid,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import { ExpenseInterface } from 'src/models/models';

export default defineComponent({
  name: 'ExpensesMainComponent',
  components: {
    ModalCard,
    AddEspenses,
    HeaderComponent,
    ScheduleXCalendar
  },
  setup() {
    // resources
    const timeStamp = Date.now()
    const render = ref<boolean>(true)
    const modalExpenses = ref<boolean>(false)
    const dateValue = date.formatDate(timeStamp, 'YYYY-MM-DD')
    const events = ref<ExpenseInterface[]>([]);

    const calendarApp = createCalendar({
      selectedDate: dateValue,
      locale: 'es-ES',
      views: [
        createViewMonthGrid(),
        createViewMonthAgenda(),
      ],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      events: events.value as any,
    });

    // methods
    const openModal = () => {
      modalExpenses.value = !modalExpenses.value
    }

    const doSaveExpense = (data: ExpenseInterface) => {
      data.id = events.value.length + 1;
      const startDate = new Date(data.start);
      const endDate = new Date(data.end);
      // Sumar 1 día a endDate
      startDate.setDate(startDate.getDate() + 1);
      endDate.setDate(endDate.getDate() + 1);
      // Formatear las fechas
      data.start = date.formatDate(startDate, 'YYYY-MM-DD');
      data.end = date.formatDate(endDate, 'YYYY-MM-DD');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      calendarApp.events.add(data as any);
      openModal();
    }

    // return
    return {
      render,
      events,
      openModal,
      calendarApp,
      modalExpenses,
      doSaveExpense,
    }
  }
})
</script>
