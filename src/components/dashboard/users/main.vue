<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :title="'Usuarios'" :btnLabel="'Agregar usuario'" @open-modal="openModal" />
    <!--end header section-->

    <!--table section-->
    <TableAsiati v-if="render" :rows="rows" :columns="users" @delete-user="deleteUser" />
    <!--end table section-->

    <!--Modal section-->
    <q-dialog v-model="openModalUser">
      <modalCard :title="'Usuario nuevo'">
        <template v-slot:body>
          <form-user @close-modal="openModal"></form-user>
        </template>
      </modalCard>
    </q-dialog>
    <!--End modal section-->
  </section>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import formUser from './formUser.vue';
import { ResponseObj, User } from 'src/models/models';
import { useUsersStore } from 'src/stores/users';
import modalCard from '../partials/modalCard.vue';
import TableAsiati from '../partials/tableAsiati.vue';
import HeaderComponent from '../partials/headers.vue';
import { computed, defineComponent, onBeforeMount, ref, watch } from 'vue'
import { notification } from 'src/boot/notification';

export default defineComponent({
  name: 'UserMainComponent',
  components: {
    formUser,
    modalCard,
    HeaderComponent,
    TableAsiati
  },
  setup() {
    // refs
    const route = useRoute()
    const render = ref<boolean>(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows = ref<any[]>([
      {
        name: 'name',
        align: 'left',
        sortable: false,
        label: 'Nombre',
        field: (row: User) => `${row.name} ${row.last_name}`,
      },
      {
        name: 'userType',
        align: 'left',
        sortable: false,
        field: (row: User) => `${row.role}`,
        label: 'Tipo usuario',
      },
      {
        name: 'email',
        align: 'left',
        sortable: false,
        field: (row: User) => `${row.email || '-'}`,
        label: 'Correo',
      },
      {
        name: 'phone',
        align: 'left',
        sortable: false,
        label: 'Teléfono',
        field: (row: User) => `${row.phone || '-'}`,
      },
      {
        name: 'option',
        align: 'center',
        sortable: false,
        label: '',
      },
    ])
    const usersStore = useUsersStore()
    const openModalUser = ref<boolean>(false)

    // computed
    const users = computed(() => {
      return usersStore.users
    })

    // watch

    // methods
    const openModal = () => {
      openModalUser.value = !openModalUser.value
    }

    const listUsers = async () => {
      try {
        const page = route.query.page || 1
        const search = route.query.search || ''
        const perPage = route.query.perPage || 12
        const query = `?page=${page}&search=${search}&perPage=${perPage}`
        await usersStore.doListUsers(query)
      } catch (error) {

      }
    }

    const deleteUser = async (id: string) => {
      try {
        const response = await usersStore.doDeleteUser(id) as ResponseObj
        if (response.success) {
          notification('positive', 'Usuario eliminado', 'primary')
          await listUsers()
        }
      } catch (error) {

      }
    }

    // life cycle
    onBeforeMount(() => {
      listUsers()
    })

    // return
    return {
      rows,
      users,
      render,
      openModal,
      deleteUser,
      openModalUser
    }
  }
})
</script>
