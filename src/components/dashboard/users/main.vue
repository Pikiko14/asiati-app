<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :title="'Usuarios'" :btnLabel="'Agregar usuario'" @open-modal="openModal" />
    <!--end header section-->

    <!--table section-->
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
import { defineComponent, ref } from 'vue'
import modalCard from '../partials/modalCard.vue';
import HeaderComponent from '../partials/headers.vue';

export default defineComponent({
  name: 'UserMainComponent',
  components: {
    formUser,
    modalCard,
    HeaderComponent
  },
  setup() {
    // refs
    const openModalUser = ref<boolean>(false)

    // methods
    const openModal = () => {
      openModalUser.value = !openModalUser.value
    }

    // return
    return {
      openModal,
      openModalUser
    }
  }
})
</script>
