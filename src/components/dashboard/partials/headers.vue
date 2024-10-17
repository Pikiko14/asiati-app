<template>
  <section class="row q-mt-md">
    <div class="col-12 col-md-6">
      <span class="text-primary text-h5 text-weight-semi-bold">
        {{ title }}
      </span>
    </div>
    <div class="col-12 col-md-6">
      <section class="full-width row d-flex justify-end" v-if="$route.path !== '/dashboard'">
        <div v-if="$route.path !== '/expenses'" class="col-12 col-md-8" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
          <q-input clearable @update:model-value="doSearch" debounce="1500" dense v-model="search"
            placeholder="Buscar..." outlined rounded
            :rules="[val => /^(?:[^,'']+)?$/.test(val) || 'El texto es invalido']">
            <template v-slot:prepend>
              <q-icon size="12pt" name="img:images/search.svg"></q-icon>
            </template>
          </q-input>
        </div>
        <div v-if="$route.path === '/expenses'" class="col-12 col-md-4" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
          <q-btn-dropdown unelevated dropdown-icon="img:/images/dropdown.svg" no-caps
            class="round-20 full-width q-mr-none" color="secondary" label="Mis tiendas">
            <q-list dense>
              <q-item clickable v-close-popup v-for="(company, idx) in companies" :key="idx"
                @click="filterByCompany(company.value)">
                <q-item-section>
                  <q-item-label>
                    {{ company.label }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="col-12 col-md-4" :class="{ 'q-pl-sm': $q.screen.gt.sm }" v-if="$hasPermission(permission)">
          <q-btn @click="openModal" rounded size="12pt" :label="btnLabel" no-caps unelevated color="primary"
            class="full-width"></q-btn>
        </div>
      </section>
      <section class="full-width dropdown-stores row d-flex justify-end" v-else>
        <div class="col-12 col-md-3" :class="{ 'q-pr-md': $q.screen.gt.sm }">
          <q-btn @click="openKpi" class="full-width btn-yellows" label="Ver KPIS" rounded unelevated no-caps></q-btn>
        </div>
        <div class="col-12 col-md-3" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
          <q-btn-dropdown unelevated dropdown-icon="img:/images/dropdown.svg" no-caps
            class="round-20 full-width q-mr-none" color="primary" label="Mis tiendas">
            <q-list dense>
              <q-item clickable v-close-popup v-for="(company, idx) in companies" :key="idx"
                @click="filterByCompany(company.value)">
                <q-item-section>
                  <q-item-label>
                    {{ company.label }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </section>
    </div>
  </section>
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import { Company } from 'src/models/models'
import { useRoute, useRouter } from 'vue-router'
import { useCompaniesStore } from 'src/stores/companies'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
  props: {
    title: String,
    btnLabel: String,
    permission: {
      type: String,
      default: () => ''
    }
  },
  emits: [
    'do-search',
    'open-modal',
    'filter-by-date',
    'filter-by-company',
    'open-kpi'
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    // references
    const popupProxy = ref()
    const route = useRoute()
    const router = useRouter()
    const search = ref<string>('')
    const companiesStore = useCompaniesStore()

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

    // computed
    const ordersMetrics = computed(() => {
      return companiesStore.metricsOrders;
    });

    // methods
    const doSearch = (e: string) => {
      const page = 1
      const perPage = route.query.perPage || 12
      const searchString = e || ''
      router.push({ query: { page, perPage, search: searchString } })
    }

    // methods
    const openModal = () => {
      emit('open-modal')
    }

    const doFilterByDate = (date: any) => {
      emit('filter-by-date', date)
      popupProxy.value.hide()
    }

    const filterByCompany = (id: string | undefined) => {
      emit('filter-by-company', id)
    }

    const openKpi = () => {
      emit('open-kpi')
    }

    // lifecycles
    onBeforeMount(() => {
      search.value = route.query.search as string
    })

    // return
    return {
      search,
      openKpi,
      doSearch,
      openModal,
      companies,
      popupProxy,
      ordersMetrics,
      doFilterByDate,
      filterByCompany,
    }
  }
})
</script>
