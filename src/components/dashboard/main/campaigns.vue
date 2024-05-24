<template>
  <q-form class="row filterCampaign" @submit="doFilter">
    <div class="col-12">
      <label for="" class="text-weight-semi-bold">Campaña publicitaria*</label>
      <q-select @update:model-value="(val) => filterAdsFromCampaign(val)" emit-value map-options dense
        v-model="filters.campaign" label="Selecciona una opción" :options="optionsCampaigns" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido']">
      </q-select>
    </div>
    <div class="col-12">
      <label for="" class="text-weight-semi-bold">Anuncio</label>
      <q-select emit-value map-options dense v-model="filters.ad" label="Selecciona una opción" :options="ads" outlined
        rounded>
      </q-select>
    </div>
    <div class="col-12 q-mt-lg">
      <label for="" class="text-weight-semi-bold">Rango de fecha</label>
      <q-input dense v-model="dateLabel" placeholder="Ingrese su correo electrónico" outlined rounded
        :rules="[val => !!val || 'Este campo es requerido']">
        <q-popup-proxy ref="popupProxy" cover transition-show="scale" transition-hide="scale">
          <q-date @update:model-value="closeDate" style="width: 420px" range minimal v-model="filters.date">
          </q-date>
        </q-popup-proxy>
      </q-input>
    </div>
    <div class="col-12 col-md-6 q-mt-xl" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <q-btn v-close-popup label="Cancelar" color="info" no-caps rounded outline class="full-width"></q-btn>
    </div>
    <div class="col-12 col-md-6  q-mt-xl" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <q-btn :loading="loading" type="submit" unelevated label="Filtrar metricas" color="primary" no-caps rounded
        class="full-width"></q-btn>
    </div>
  </q-form>
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import { date } from 'quasar';
import { computed, defineComponent, ref } from 'vue'
import { useCompaniesStore } from 'src/stores/companies';
import { CampaignsInterface, FilterInterface, ResponseObj } from 'src/models/models';

export default defineComponent({
  name: 'CampaignsComponent',
  emits: ['close-modal'],
  props: {
    campaigns: {
      type: Array as () => CampaignsInterface[],
      default: () => []
    },
    company: {
      type: String,
      default: () => ''
    }
  },
  setup(props, { emit }) {
    // references
    const popupProxy = ref();
    const filters = ref<FilterInterface>({
      campaign: '',
      ad: '',
      date: {}
    });
    const ads = ref<any[]>([]);
    const loading = ref<boolean>(false);
    const companiesStore = useCompaniesStore();

    // computed
    const optionsCampaigns = computed(() => {
      return props.campaigns.map((item: CampaignsInterface) => {
        return {
          value: item.id,
          label: item.name
        }
      })
    });

    const dateLabel = computed(() => {
      return `${filters.value.date.from || ''} - ${filters.value.date.to || ''}`
    })

    // methods
    const filterAdsFromCampaign = async (id: string | number) => {
      try {
        const response = await companiesStore.listAds(props.company, id) as ResponseObj;
        if (response.success) {
          ads.value = response.data.ads.map((item: any) => {
            return {
              label: item.name,
              value: item.id
            }
          })
        }
      } catch (error) {
      }
    }

    const doFilter = async () => {
      loading.value = true
      companiesStore.setMetrics({})
      try {
        const query = `?from=${filters.value.date.from || filters.value.date}&to=${filters.value.date.to || filters.value.date}`
        const response = await companiesStore.listMetrics(props.company, filters.value.ad || filters.value.campaign, query) as ResponseObj;
        if (response.success) {
          if (response.data.metrics && response.data.metrics.length > 0) {
            companiesStore.setMetrics(response.data.metrics.shift())
          }
          emit('close-modal')
        }
      } catch (error) {
      } finally {
        loading.value = false
      }
    }

    const closeDate = () => {
      popupProxy.value.hide()
    }

    // return data
    return {
      ads,
      loading,
      filters,
      doFilter,
      dateLabel,
      optionsCampaigns,
      filterAdsFromCampaign,
      closeDate,
      popupProxy
    }
  }
})
</script>
