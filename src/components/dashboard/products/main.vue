<template>
  <section class="full-width">
    <!--Header section-->
    <HeaderComponent :permission="'create-products'" :title="'Productos'" :btnLabel="'Crear producto'"
      @open-modal="openModal" />
    <!--end header section-->

    <!--table section-->
    <TableAsiati v-if="render" permission-edit="edit-users" permission-delete="delete-products" :rows="rows"
      :columns="products" :total-items="totalItems" @do-delete="deleteUser" @do-edit="doEdit" />
    <!--end table section-->

    <!--Modal section-->
    <q-dialog v-model="openModalProducts" @before-hide="clearData">
      <ModalCard :title="product._id ? 'Editar product' : 'Producto nuevo'">
        <template v-slot:body>
          <FormProduct @close-modal="openModal" :productData="product" />
        </template>
      </ModalCard>
    </q-dialog>
    <!--End modal section-->
  </section>
</template>

<script lang="ts">
import FormProduct from './form.vue'
import { useRoute } from 'vue-router'
import { Utils } from 'src/utils/utils'
import ModalCard from '../partials/modalCard.vue'
import { notification } from 'src/boot/notification'
import HeaderComponent from '../partials/headers.vue'
import TableAsiati from '../partials/tableAsiati.vue'
import { useProductsStore } from 'src/stores/products'
import { ProductsInterface, ResponseObj } from 'src/models/models'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  name: 'ProductMainComponent',
  components: {
    ModalCard,
    FormProduct,
    HeaderComponent,
    TableAsiati,
  },
  setup() {
    // data
    const route = useRoute()
    const store = useProductsStore()
    const render = ref<boolean>(true)
    const utils = new Utils('products')
    const product = ref<ProductsInterface>({
      name: '',
      value: 0,
      iva: 0
    })
    const openModalProducts = ref<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows = ref<any[]>([
      {
        name: 'name',
        align: 'left',
        sortable: false,
        label: 'Nombre',
        field: (row: ProductsInterface) => `${row.name}`,
      },
      {
        name: 'value',
        align: 'right',
        sortable: false,
        field: (row: ProductsInterface) => `${utils.formatPrice(row.value)}`,
        label: 'Costo (COP)',
      },
      {
        name: 'is_health_and_wellness',
        align: 'center',
        sortable: false,
        field: (row: ProductsInterface) => `${row.iva}%`,
        label: 'Impuesto',
      },
      {
        name: 'option',
        align: 'center',
        sortable: false,
        label: '',
      },
    ])

    // computed
    const products = computed(() => {
      return store.products
    })

    const totalItems = computed(() => {
      return store.totalItems
    })

    // methods
    const clearData = (): void => {
      product.value = {
        name: '',
        value: 0,
        iva: 0
      }
    }

    const openModal = (): void => {
      openModalProducts.value = !openModalProducts.value
      if (!openModalProducts.value) {
        clearData()
      }
    }

    const listProducts = async () => {
      try {
        const page = route.query.page || 1
        const search = route.query.search || ''
        const perPage = route.query.perPage || 12
        const query = `?page=${page}&search=${search}&perPage=${perPage}`
        await store.doListProducts(query)
      } catch (error) {
      }
    }

    const doEdit = (productId: string): void => {
      product.value = products.value.find(
        (product: ProductsInterface) => product._id === productId
      ) as ProductsInterface
      openModal()
    }

    const deleteUser = async (productId: string): Promise<void> => {
      try {
        const response = await store.doDeleteProduct(productId) as ResponseObj
        if (response.success) {
          notification('positive', response.message, 'primary')
        }
      } catch (error) {
      }
    }

    // hook
    onBeforeMount(async () => {
      await listProducts()
    })

    return {
      rows,
      render,
      doEdit,
      product,
      products,
      openModal,
      clearData,
      totalItems,
      deleteUser,
      openModalProducts
    }
  }
})
</script>
