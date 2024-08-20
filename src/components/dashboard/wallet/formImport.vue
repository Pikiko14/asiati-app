<template>
  <div class="full-width">
    <q-form class="row full-width" @submit="doImportWalletMovements">
      <div class="col-12">
        <label for="" class="text-weight-semi-bold">Archivo excel</label>
        <q-file dense v-model="wallet.file" label="Selecciona un archivo" outlined rounded
          :rules="[val => !!val || 'Este campo es requerido']">
        </q-file>
      </div>
      <div class="col-12">
        <label for="" class="text-weight-semi-bold">Tienda</label>
        <q-select :options="companies" map-options emit-value dense v-model="wallet.company"
          label="Selecciona la tienda" outlined rounded :rules="[val => !!val || 'Este campo es requerido']">
        </q-select>
      </div>
      <div class="col-12">
        <label for="" class="text-weight-semi-bold">Bajar plantilla excel</label>
        <q-btn flat dense icon="download" @click="downloadExcel" round class="q-ml-sm" color="primary"></q-btn>
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
import { useWalletsStore } from 'src/stores/wallet';
import { notification } from 'src/boot/notification';
import { useCompaniesStore } from 'src/stores/companies';
import { Company, ResponseObj, WalletImportInterface } from 'src/models/models';
import { computed, defineComponent, onBeforeMount, ref } from 'vue';

export default defineComponent({
  name: 'WalletFormImportComponent',
  setup(props, { emit }) {
    // references
    const utils = new Utils('wallet');
    const wallet = ref<WalletImportInterface>({
      file: null,
      company: null
    })
    const loading = ref<boolean>(false);
    const walletsStore = useWalletsStore();
    const companiesStore = useCompaniesStore();

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
    });

    // methods
    const doImportWalletMovements = async () => {
      try {
        loading.value = true;
        const formData = utils.transformObjectInFormData(wallet.value, false, null);
        const response = await walletsStore.doImportWallets(formData) as ResponseObj;
        if (response && response.success) {
          notification('positive', response.message, 'primary');
          emit('close-modal');
        }
      } catch (error) {
      } finally {
        loading.value = false;
      }
    }

    const listCompanies = async () => {
      try {
        await companiesStore.listForSelect();
      } catch (error) {
      }
    }

    const downloadExcel = () => {
      window.open(`/excel/wallet_template.xlsx`, '_blank');
    }

    // hook
    onBeforeMount(async () => {
      if (companies.value.length > 0) return;
      await listCompanies();
    });

    return {
      wallet,
      loading,
      companies,
      downloadExcel,
      doImportWalletMovements
    }
  }
})
</script>ResponseObj, import { emit } from 'cluster';
import { notification } from 'src/boot/notification';
