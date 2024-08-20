<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :permission="'create-products'" :title="'Cartera'" :btnLabel="'Importar'"
      @open-modal="openModal" />
    <!--end header section-->

    <!--Modal section-->
    <q-dialog v-model="openModalImport">
      <ModalCard :title="'Importar cartera'">
        <template v-slot:body>
          <FormImport />
        </template>
      </ModalCard>
    </q-dialog>
    <!--End modal section-->
  </section>
</template>

<script lang="ts">
import FormImport from './formImport.vue';
import { defineComponent, ref } from 'vue';
import ModalCard from '../partials/modalCard.vue';
import HeaderComponent from '../partials/headers.vue';

export default defineComponent({
  name: 'WalletMainComponent',
  components: {
    ModalCard,
    FormImport,
    HeaderComponent,
  },
  setup() {
    // references
    const openModalImport = ref<boolean>(false);

    // methods
    const openModal = () => {
      openModalImport.value = !openModalImport.value;
    }

    return {
      openModal,
      openModalImport
    }
  }
})
</script>
