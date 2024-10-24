<template>
  <div class="full-width">
    <!--Header section-->
    <HeaderComponent @filter-by-company="doFilterByCompany" :permission="'create-expenses'" :title="'Gastos operativos'"
      :btnLabel="'Agregar gasto'" @open-modal="openModal" />
    <!--end header section-->

    <!--Calendar app-->
    <ScheduleXCalendar v-if="render" class="window-height q-mt-xl q-pt-xl" :calendar-app="calendarApp" />
    <!--End calendar app-->

    <!--Modal add expenses-->
    <q-dialog @before-hide="clearData" v-model="modalExpenses">
      <ModalCard :title="event.id ? 'Editar gasto operativo' : 'Agregar gasto opérativo'">
        <template v-slot:body>
          <AddEspenses :event="event" @do-delete-expense="doDeleteExpense" @do-update-expense="doUpdateExpense"
            @do-save-expense="doSaveExpense" />
        </template>
      </ModalCard>
    </q-dialog>
    <!--End modal add expenses-->
  </div>
</template>

<script lang="ts">
import { date } from 'quasar'
import { defineComponent, onBeforeMount, ref } from 'vue'
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
import { ExpenseInterface, ResponseObj } from 'src/models/models';
import { useExpensesStore } from 'src/stores/expenses';
import { useCompaniesStore } from 'src/stores/companies';
import { createEventsServicePlugin } from '@schedule-x/events-service';

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
    const eventsServicePlugin = createEventsServicePlugin();
    const timeStamp = Date.now()
    const render = ref<boolean>(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eventForFilter = ref<any>({})
    const expensesStore = useExpensesStore()
    const modalExpenses = ref<boolean>(false)
    const dateValue = date.formatDate(timeStamp, 'YYYY-MM-DD')
    const events = ref<ExpenseInterface[]>([]);
    const companiesStore = useCompaniesStore();
    const event = ref<ExpenseInterface>({
      id: 0,
      title: '',
      start: '',
      end: '',
      company: '',
      amount: 0
    });

    const calendarApp = createCalendar({
      selectedDate: dateValue,
      locale: 'es-ES',
      views: [
        createViewMonthGrid(),
        createViewMonthAgenda(),
      ],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      events: events.value as any,
      callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onEventClick: (data: any) => {
          event.value = data
          eventForFilter.value = data
          openModal();
        },
        onEventUpdate: (updatedEvent) => {
          // Handle updated event
          console.log("Event updated:", updatedEvent);
        }
      }
    }, [eventsServicePlugin]);

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

    const doListExpenses = async (company: string) => {
      try {
        const { data = [] } = await expensesStore.listExpenses(company) as ResponseObj;
        prepareEvents(data);
      } catch (error) {
      }
    }

    const doFilterByCompany = async (company: string) => {
      try {
        await doListExpenses(company)
      } catch (error) {
      }
    }

    const loadCompanies = async () => {
      try {
        await companiesStore.listForSelect()
      } catch (error) {
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const prepareEvents = (bbddEvents: any) => {
      for (const item of bbddEvents) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any = {};
        data.id = item._id;
        data._id = item._id;
        data.title = `${item.title} - ${item.amount}`;
        data.amount = item.amount;
        const startDate = new Date(item.start);
        const endDate = new Date(item.end);
        data.company = item.company;
        // Sumar 1 día a endDate
        startDate.setDate(startDate.getDate() + 1);
        endDate.setDate(endDate.getDate() + 1);
        // Formatear las fechas
        data.start = date.formatDate(startDate, 'YYYY-MM-DD');
        data.end = date.formatDate(endDate, 'YYYY-MM-DD');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        calendarApp.events.add(data as any);
      }
    }

    const clearData = () => {
      event.value = {
        id: 0,
        title: '',
        start: '',
        end: '',
        company: '',
        amount: 0
      }
    }

    const doUpdateExpense = (data: any) => {
      const startDate = new Date(data.start);
      const endDate = new Date(data.end);
      // Sumar 1 día a endDate
      startDate.setDate(startDate.getDate() + 1);
      endDate.setDate(endDate.getDate() + 1);
      // Formatear las fechas
      eventForFilter.value.start = date.formatDate(startDate, 'YYYY-MM-DD');
      eventForFilter.value.end = date.formatDate(endDate, 'YYYY-MM-DD');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      eventsServicePlugin.update(eventForFilter.value as any);
      openModal();
    }

    const doDeleteExpense = (data: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      eventsServicePlugin.remove(eventForFilter.value._id as any);
      openModal();
    }

    // hooks
    onBeforeMount(async () => {
      await loadCompanies()
    })

    // return
    return {
      event,
      render,
      events,
      clearData,
      openModal,
      calendarApp,
      modalExpenses,
      doSaveExpense,
      doUpdateExpense,
      doDeleteExpense,
      doFilterByCompany,
    }
  }
})
</script>
