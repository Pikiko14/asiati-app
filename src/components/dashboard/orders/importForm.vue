<template>
  <div class="full-width">
    <q-form class="row full-width" @submit="doImportOrders">
      <div class="col-12">
        <label for="" class="text-weight-semi-bold">Archivo excel</label>
        <q-file dense v-model="order.file" label="Selecciona un archivo" outlined rounded
          :rules="[val => !!val || 'Este campo es requerido']">
        </q-file>
      </div>
      <div class="col-12">
        <label for="" class="text-weight-semi-bold">Tienda</label>
        <q-select :options="companies" map-options emit-value dense v-model="order.company" label="Selecciona la tienda"
          outlined rounded :rules="[val => !!val || 'Este campo es requerido']">
        </q-select>
      </div>
      <div class="col-12">
        <label for="" class="text-weight-semi-bold">Tipo ecommerce</label>
        <q-select :options="typeOrder" map-options emit-value dense v-model="order.type" label="Selecciona un archivo"
          outlined rounded :rules="[val => !!val || 'Este campo es requerido']">
        </q-select>
      </div>
      <div class="col-12 col-md-6 q-mt-xl" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
        <q-btn v-close-popup label="Cancelar" color="info" no-caps rounded outline class="full-width"></q-btn>
      </div>
      <div class="col-12 col-md-6  q-mt-xl" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
        <q-btn :loading="loading" type="submit" unelevated label="Importar" color="primary" no-caps rounded
          class="full-width"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { Utils } from 'src/utils/utils';
import { useCompaniesStore } from 'src/stores/companies';
import { Company, OrderImportInterface, ResponseObj } from 'src/models/models';
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
import { useOrdersStore } from 'src/stores/orders';
import { notification } from 'src/boot/notification';

export default defineComponent({
  name: 'ImportOrdersComponent',
  emits: ['close-modal'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    // data
    const utils = new Utils('orders');
    const orderStore = useOrdersStore();
    const loading = ref<boolean>(false);
    const order = ref<OrderImportInterface>({
      file: null,
      company: null,
      type: null
    })
    const companiesStore = useCompaniesStore();
    const typeOrder = [
      'Dropi',
      'Shopify',
    ];

    // computeds
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
    const listCompanies = async () => {
      try {
        await companiesStore.listForSelect()
      } catch (error) {

      }
    }

    const doImportOrders = async () => {
      try {
        loading.value = true;
        const formData = utils.transformObjectInFormData(order.value, false, null);
        const response = await orderStore.doImportOrders(formData) as ResponseObj;
        if (response && response.success) {
          notification('positive', response.message, 'primary');
          emit('close-modal');
        }
      } catch (error) {
      } finally {
        loading.value = false;
      }
    }

    // hook
    onBeforeMount(async () => {
      if (companies.value.length > 0) return
      await listCompanies()
    });

    return {
      order,
      loading,
      companies,
      typeOrder,
      doImportOrders
    }
  }
})
</script>
