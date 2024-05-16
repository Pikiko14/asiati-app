<template>
  <section class="full-width q-mt-lg">
    <q-table @request="onRequest" :rows-per-page-options="[1, 5, 12, 20, 50]" v-model:pagination="pagination"
      row-key="_id" class="shadow-0 round-10" :columns="rows" :rows="columns">
      <!--role td-->
      <template v-slot:body-cell-userType="props">
        <q-td>
          <q-chip :class="{ 'admin-chip': props.row.role === 'admin', 'ceo-chip': props.row.role === 'ceo' }"
            color="secondary" class="text-white" size="8pt">
            <p class="full-width text-center q-pt-md">
              {{ roles[props.row.role] }}
            </p>
          </q-chip>
        </q-td>
      </template>
      <!--end role td-->

      <!--options td-->
      <template v-slot:body-cell-option="props">
        <q-td>
          <q-btn size="8pt" flat round icon="img:/images/options.svg">
            <q-tooltip class="bg-primary">
              Opciones
            </q-tooltip>
            <q-menu class="round-10">
              <q-list dense>
                <q-item clickable @click="doEdit(props.row._id)">
                  <q-item-section>
                    <q-item-label class="text-primary text-weight-semi-bold">
                      Editar
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable @click="doDolete(props.row._id)">
                  <q-item-section>
                    <q-item-label class="text-primary text-weight-semi-bold">
                      Eliminar
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </template>
      <!--end options td-->
    </q-table>
  </section>
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, onBeforeMount, ref, watch } from 'vue'

export default defineComponent({
  name: 'TableAsiati',
  emits: ['do-delete', 'do-edit'],
  props: {
    rows: {
      type: Array as () => any[],
      required: true,
      default: () => []
    },
    columns: {
      type: Array as () => any[],
      required: true,
      default: () => []
    },
    totalItems: Number
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    // references
    const $q = useQuasar()
    const route = useRoute()
    const roles = ref<any>({
      admin: 'Administrador',
      ceo: 'CEO'
    })
    const pagination = ref({
      page: 1,
      rowsPerPage: 12,
      rowsNumber: 1,
    });
    const router = useRouter()

    // watch
    watch(() => props.totalItems, () => {
      pagination.value.rowsNumber = props.totalItems as number
    })

    // methods
    const doDolete = (id: string) => {
      $q.dialog({
        title: 'Eliminar',
        message: '¿Deseas eliminar este elemento?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        emit('do-delete', id)
      }).onCancel(() => {
        // console.log('Cancel')
      })
    }

    const onRequest = (e: any) => {
      const { pagination } = e
      const page = pagination.page || 1
      const perPage = pagination.rowsPerPage || 12
      const search = route.query.search || ''
      router.push({ query: { page, perPage, search } })
    }

    const doEdit = (id: string) => {
      emit('do-edit', id)
    }

    // life cycle
    onBeforeMount(() => {
      if (route.query.page) {
        pagination.value.page = Number(route.query.page)
      }
      if (route.query.perPage) {
        pagination.value.rowsPerPage = Number(route.query.perPage)
      }
      if (props.totalItems) {
        pagination.value.rowsNumber = props.totalItems
      }
    })

    // return
    return {
      roles,
      doEdit,
      doDolete,
      onRequest,
      pagination,
    }
  }
})
</script>
