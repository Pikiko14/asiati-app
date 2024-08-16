<template>
  <q-form @submit="doSaveProduct" class="row product-form">
    <div class="col-12" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Nombre del producto</label>
      <q-input dense v-model.string="product.name" placeholder="Cocacola 1Lt" outlined rounded :rules="[
        val => !!val || 'Este campo es requerido',
        val => val.length < 90 || '90 caracteres maximos',
        val => /^[a-zA-Z0-9\s]+$/.test(val)
          || 'Ingresa un nombre valido'
      ]">
      </q-input>
    </div>
    <div class="col-12" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Costo del producto</label>
      <q-input dense v-model.number="product.value" placeholder="15000" outlined rounded :rules="[
        val => !!val || 'Este campo es requerido',
        val => /^\d+(\.\d+)?$/.test(val) || 'Ingresa un nombre valido'
      ]">
      </q-input>
    </div>
    <div class="col-12" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <label for="" class="text-weight-semi-bold">Salud y bienestar</label><br>
      <q-checkbox style="margin-left: -8px" v-model="product.is_health_and_wellness"
        :label="product.is_health_and_wellness ? 'No' : 'Si'"></q-checkbox>
    </div>
    <div class="col-12 col-md-6 q-mt-xl" :class="{ 'q-pr-sm': $q.screen.gt.sm }">
      <q-btn v-close-popup label="Cancelar" color="info" no-caps rounded outline class="full-width"></q-btn>
    </div>
    <div class="col-12 col-md-6  q-mt-xl" :class="{ 'q-pl-sm': $q.screen.gt.sm }">
      <q-btn :loading="loading" type="submit" unelevated :label="!product._id ? 'Crear producto' : 'Editar product'"
        color="primary" no-caps rounded class="full-width"></q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { useProductsStore } from 'src/stores/products'
import { notification } from 'src/boot/notification';
import { defineComponent, onBeforeMount, ref } from 'vue'
import { ProductsInterface, ResponseObj } from 'src/models/models'

export default defineComponent({
  name: 'FormProductComponent',
  emits: [
    'close-modal'
  ],
  props: {
    productData: {
      type: Object as () => ProductsInterface,
      default: () => {
        return {
        }
      }
    }
  },
  setup(props, { emit }) {
    // data
    const { productData } = props
    const store = useProductsStore();
    const loading = ref<boolean>(false)
    const product = ref<ProductsInterface>({
      name: '',
      value: 0,
      is_health_and_wellness: false
    })

    // methods
    const doSaveProduct = async () => {
      if (product.value._id) {
        await doUpdateProduct()
        return false
      }

      try {
        loading.value = true
        const response = await store.doSaveProduct(product.value) as ResponseObj;
        if (response.success) {
          notification("positive", response.message, "primary");
          emit('close-modal')
        }
      } catch (error) {
      } finally {
        loading.value = false
      }
    }

    const doUpdateProduct = async () => {
      try {
        loading.value = true
        const response = await store.doUpdateProducts(product.value) as ResponseObj;
        if (response.success) {
          notification("positive", response.message, "primary");
          emit('close-modal')
        }
      } catch (error) {
      } finally {
        loading.value = false
      }
    }

    // hook
    onBeforeMount(() => {
      if (productData._id) {
        product.value = JSON.parse(JSON.stringify(productData))
      }
    })

    return {
      product,
      loading,
      doSaveProduct
    }
  }
})
</script>
