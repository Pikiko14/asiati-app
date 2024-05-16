<template>
  <section class="row q-mt-md">
    <div class="col-12 col-md-6">
      <span class="text-primary text-h5 text-weight-semi-bold">
        {{ title }}
      </span>
    </div>
    <div class="col-12 col-md-6">
      <section class="full-width row d-flex justify-end">
        <div class="col-12 col-md-8" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
          <q-input clearable @update:model-value="doSearch" debounce="1500" dense v-model="search"
            placeholder="Buscar..." outlined rounded
            :rules="[val => /^(?:[^,'']+)?$/.test(val) || 'El texto es invalido']">
            <template v-slot:prepend>
              <q-icon size="12pt" name="img:images/search.svg"></q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-4" :class="{ 'q-pl-sm': $q.screen.gt.sm }" v-if="$hasPermission(permission)">
          <q-btn v-if="$hasPermission(permission)" @click="openModal" rounded size="12pt" :label="btnLabel" no-caps
            unelevated color="primary" class="full-width"></q-btn>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, onBeforeMount, ref } from 'vue'

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
    'open-modal',
    'do-search'
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    // references
    const route = useRoute()
    const router = useRouter()
    const search = ref<string>('')

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

    // lifecycles
    onBeforeMount(() => {
      search.value = route.query.search as string
    })

    // return
    return {
      search,
      doSearch,
      openModal
    }
  }
})
</script>
