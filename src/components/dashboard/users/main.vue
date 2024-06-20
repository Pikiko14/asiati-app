<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :permission="'create-users'" :title="'Usuarios'" :btnLabel="'Agregar usuario'"
      @open-modal="openModal" />
    <!--end header section-->

    <!--table section-->
    <TableAsiati v-if="render" permission-edit="edit-users" permission-delete="delete-users" :rows="rows"
      :columns="users" :total-items="totalItems" @do-delete="deleteUser" @do-edit="doEdit" />
    <!--end table section-->

    <!--Modal section-->
    <q-dialog v-model="openModalUser">
      <modalCard :title="user._id ? 'Editar usuario' : 'Usuario nuevo'">
        <template v-slot:body>
          <form-user :userData="user" @close-modal="openModal"></form-user>
        </template>
      </modalCard>
    </q-dialog>
    <!--End modal section-->
  </section>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import formUser from './formUser.vue';
import { useUsersStore } from 'src/stores/users';
import modalCard from '../partials/modalCard.vue';
import { notification } from 'src/boot/notification';
import TableAsiati from '../partials/tableAsiati.vue';
import HeaderComponent from '../partials/headers.vue';
import { ResponseObj, User, UserRole } from 'src/models/models';
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

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
    const user = ref<User>({
      name: '',
      last_name: '',
      email: '',
      phone: '',
      role: UserRole.CEO,
      scopes: [],
      is_active: true,
      username: '',
      password: '',
    })
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

    const totalItems = computed(() => {
      return usersStore.totalItems
    })

    // watch

    // methods
    const openModal = () => {
      openModalUser.value = !openModalUser.value
      user.value = {
        name: '',
        last_name: '',
        email: '',
        phone: '',
        role: UserRole.CEO,
        scopes: [],
        is_active: true,
        username: '',
        password: '',
      }
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
        }
      } catch (error) {

      }
    }

    const doEdit = (id: string) => {
      const userFind = usersStore.users.find((user: User) => user._id === id)
      if (userFind && typeof userFind === 'object') {
        user.value = userFind
        user.value.password = ''
        openModalUser.value = true
      }
    }

    // life cycle
    onBeforeMount(async () => {
      await listUsers()
    })

    // return
    return {
      rows,
      user,
      users,
      doEdit,
      render,
      openModal,
      deleteUser,
      totalItems,
      openModalUser
    }
  }
})
</script>
