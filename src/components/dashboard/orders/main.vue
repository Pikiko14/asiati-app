<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :permission="'create-users'" :title="'Ordenes'" :btnLabel="'Importar'" @open-modal="openModal" />
    <!--end header section-->

    <!--Modal section-->
    <q-dialog v-model="openModalImport">
      <modalCard :title="'Importar ordenes'">
        <template v-slot:body>
          <importForm @close-modal="openModal" />
        </template>
      </modalCard>
    </q-dialog>
    <!--End modal section-->
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import importForm from './importForm.vue';
import modalCard from '../partials/modalCard.vue';
import HeaderComponent from '../partials/headers.vue';

export default defineComponent({
  name: 'OrdersMainComponent',
  components: {
    HeaderComponent,
    importForm,
    modalCard
  },
  setup() {
    // data
    const openModalImport = ref<boolean>(false)

    // methods
    const openModal = () => {
      openModalImport.value = !openModalImport.value
    }

    // return
    return {
      openModal,
      openModalImport
    }
  }
})
</script>
