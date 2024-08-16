<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :permission="'create-products'" :title="'Productos'" :btnLabel="'Crear producto'"
      @open-modal="openModal" />
    <!--end header section-->

    <!--Modal section-->
    <q-dialog v-model="openModalProducts">
      <ModalCard :title="product._id ? 'Editar product' : 'Producto nuevo'">
        <template v-slot:body>
          <FormProduct @close-modal="openModal" />
        </template>
      </ModalCard>
    </q-dialog>
    <!--End modal section-->
  </section>
</template>

<script lang="ts">
import FormProduct from './form.vue';
import { defineComponent, ref } from 'vue'
import ModalCard from '../partials/modalCard.vue';
import HeaderComponent from '../partials/headers.vue';
import { ProductsInterface } from 'src/models/models';

export default defineComponent({
  name: 'ProductMainComponent',
  components: {
    ModalCard,
    FormProduct,
    HeaderComponent,
  },
  setup() {
    // data
    const product = ref<ProductsInterface>({
      name: '',
      value: 0,
      is_health_and_wellness: false
    })
    const openModalProducts = ref<boolean>(false)

    // methods
    const openModal = (): void => {
      openModalProducts.value = !openModalProducts.value
      if (!openModalProducts.value) {
        product.value = {
          name: '',
          value: 0,
          is_health_and_wellness: false
        }
      }
    }

    return {
      product,
      openModal,
      openModalProducts
    }
  }
})
</script>
