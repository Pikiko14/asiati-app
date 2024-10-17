<template>
  <q-form class="row full-width" style="max-width: 400px" @submit="doSaveConfiguration">
    <div class="col-12 col-md-12" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Iva general</label>
      <q-input dense v-model.number="configuration.general_iva" placeholder="19%" outlined rounded type="number"
        :rules="[val => !!val || 'Este campo es requerido']">
      </q-input>
    </div>
    <div class="col-12 col-md-12" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Fullfilment</label>
      <q-input dense v-model.number="configuration.fullfilment" placeholder="1200" outlined rounded type="number"
        :rules="[val => !!val || 'Este campo es requerido']">
      </q-input>
    </div>
    <div class="col-12 col-md-12" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Rent tax</label>
      <q-input dense v-model="configuration.renttax" placeholder="Aca va el rentax" outlined rounded>
      </q-input>
    </div>
    <div class="col-12 col-md-6 q-mt-xl" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <q-btn v-close-popup label="Cancelar" color="info" no-caps rounded outline class="full-width"></q-btn>
    </div>
    <div class="col-12 col-md-6  q-mt-xl" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <q-btn :loading="loading" type="submit" unelevated :label="!configuration._id ? 'Guardar' : 'Guardar'"
        color="primary" no-caps rounded class="full-width"></q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { notification } from 'src/boot/notification';
import { useConfigurationStore } from 'src/stores/configuration';
import { ConfigurationInterface, ResponseObj } from 'src/models/models';

export default defineComponent({
  name: 'ConfigurationComponent',
  emits: ['close-modal'],
  setup(props, { emit }) {
    // references
    const loading = ref(false);
    const { configurationData, saveConfiguration } = useConfigurationStore();
    const configuration = ref<ConfigurationInterface>({
      general_iva: null,
      fullfilment: null,
      renttax: '',
    });

    // computed
    const configurationDataStore = computed(() => {
      return configurationData;
    });

    // methods
    const doSaveConfiguration = async () => {
      loading.value = true
      try {
        const response = await saveConfiguration(configuration.value) as ResponseObj
        if (response.success) {
          notification('positive', response.message as string, 'primary')
          configuration.value = JSON.parse(JSON.stringify(configurationDataStore.value))
          emit('close-modal')
        }
      } catch (error) {
      } finally {
        loading.value = false
      }
    }

    // hook
    onBeforeMount(() => {
      configuration.value = JSON.parse(JSON.stringify(configurationDataStore.value))
    })

    // return statemend
    return {
      loading,
      configuration,
      doSaveConfiguration,
    }
  }
})
</script>
