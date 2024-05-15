<template>
  <section class="full-width q-mt-lg">
    <q-table class="shadow-0 round-10" :columns="rows" :rows="columns">
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
                <q-item clickable>
                  <q-item-section>
                    <q-item-label class="text-primary text-weight-semi-bold">
                      Editar
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable @click="deleteUser(props.row._id)">
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

<script lang="ts">
import { useQuasar } from 'quasar'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TableAsiati',
  props: {
    rows: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Array as () => any[],
      required: true,
      default: () => []
    },
    columns: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Array as () => any[],
      required: true,
      default: () => []
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    // references
    const $q = useQuasar()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const roles = ref<any>({
      admin: 'Administrador',
      ceo: 'CEO'
    })

    // methods
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const deleteUser = (id: string) => {
      $q.dialog({
        title: 'Eliminar el usuario',
        message: '¿Deseas eliminar el usuario seleccionado?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        emit('delete-user', id)
      }).onCancel(() => {
        // console.log('Cancel')
      })
    }

    // return
    return {
      roles,
      deleteUser
    }
  }
})
</script>
