<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :title="'Usuarios'" :btnLabel="'Agregar usuario'" @open-modal="openModal" />
    <!--end header section-->

    <!--table section-->
    {{ users }}
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
import formUser from './formUser.vue';
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import modalCard from '../partials/modalCard.vue';
import HeaderComponent from '../partials/headers.vue';
import { useUsersStore } from 'src/stores/users';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'UserMainComponent',
  components: {
    formUser,
    modalCard,
    HeaderComponent
  },
  setup() {
    // refs
    const route = useRoute()
    const usersStore = useUsersStore()
    const openModalUser = ref<boolean>(false)

    // computed
    const users = computed(() => {
      return usersStore.users
    })

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

    // life cycle
    onBeforeMount(() => {
      listUsers()
    })

    // return
    return {
      users,
      openModal,
      openModalUser
    }
  }
})
</script>
