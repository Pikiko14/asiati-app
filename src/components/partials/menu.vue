<template>
  <q-list class="bg-primary custom-aside">
    <q-item-label header class="q-pa-sm q-pt-lg text-center">
      <q-icon size="60px" name="img:/images/logo.png"></q-icon>
    </q-item-label>

    <q-item to="/dashboard" v-if="$hasPermission('list-meta-metric')">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat size="18pt" dense rounded name="img:/images/dashboard.svg"></q-icon>
        </q-item-label>
      </q-item-section>
      <q-tooltip class="bg-secondary" anchor="center right" self="center left">
        Dashboard
      </q-tooltip>
    </q-item>
    <q-item to="/orders?page=1&perPage=12&search=" v-if="$hasPermission('list-orders')" class="q-mt-sm">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat size="22pt" dense rounded name="img:/images/orders.svg"></q-icon>
        </q-item-label>
      </q-item-section>
      <q-tooltip class="bg-secondary" anchor="center right" self="center left">
        Ordenes
      </q-tooltip>
    </q-item>
    <q-item to="/companies?page=1&perPage=12&search=" class="q-mt-sm" v-if="$hasPermission('list-business')">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat size="18pt" dense rounded name="img:/images/company.svg"></q-icon>
        </q-item-label>
      </q-item-section>
      <q-tooltip class="bg-secondary" anchor="center right" self="center left">
        Compañias
      </q-tooltip>
    </q-item>
    <q-item to="/products?page=1&perPage=12&search=" class="q-mt-sm" v-if="$hasPermission('list-products')">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat size="20pt" dense rounded name="inventory" color="white"></q-icon>
        </q-item-label>
      </q-item-section>
      <q-tooltip class="bg-secondary" anchor="center right" self="center left">
        Productos
      </q-tooltip>
    </q-item>
    <q-item to="/wallets?page=1&perPage=12&search=" class="q-mt-sm" v-if="$hasPermission('list-wallet')">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat size="22pt" dense rounded name="wallet" color="white"></q-icon>
        </q-item-label>
      </q-item-section>
      <q-tooltip class="bg-secondary" anchor="center right" self="center left">
        Wallet
      </q-tooltip>
    </q-item>
    <q-item to="/expenses?page=1&perPage=12&search=" class="q-mt-sm" v-if="$hasPermission('list-users')">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat size="22pt" dense rounded name="payments" color="white"></q-icon>
        </q-item-label>
      </q-item-section>
      <q-tooltip class="bg-secondary" anchor="center right" self="center left">
        Gastos operativos
      </q-tooltip>
    </q-item>
    <q-item to="/users?page=1&perPage=12&search=" class="q-mt-sm" v-if="$hasPermission('list-users')">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat size="18pt" dense rounded name="img:/images/users.svg"></q-icon>
        </q-item-label>
      </q-item-section>
      <q-tooltip class="bg-secondary" anchor="center right" self="center left">
        usuarios
      </q-tooltip>
    </q-item>

    <!--logout items-->
    <div class="absolute-bottom full-width">
      <q-item clickable @click="openModal" v-if="$hasPermission('create-configuration')">
        <q-item-section>
          <q-item-label class="text-center">
            <q-icon flat style="margin-left: 3px" size="20pt" color="white" dense rounded name="settings"></q-icon>
          </q-item-label>
        </q-item-section>
        <q-tooltip class="bg-secondary" anchor="center right" self="center left">
          Configuración
        </q-tooltip>
      </q-item>
      <q-item clickable @click="doLogout">
        <q-item-section>
          <q-item-label class="text-center">
            <q-icon flat style="margin-left: -5px" size="20pt" dense rounded name="img:/images/logout.svg"></q-icon>
          </q-item-label>
        </q-item-section>
        <q-tooltip class="bg-secondary" anchor="center right" self="center left">
          Cerrar sesión
        </q-tooltip>
      </q-item>
    </div>
  </q-list>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'

export default defineComponent({
  name: 'MenuComponent',
  emits: ['open-modal'],
  setup(props, { emit }) {
    // references
    const $q = useQuasar()
    const router = useRouter()
    const authStore = useAuthStore()

    // methods
    const doLogout = () => {
      $q.dialog({
        title: '¿Deseas cerrar sesión?',
        message: '¿Estas seguro que deseas salir de la aplicación?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        authStore.doLogout()
        router.push({
          name: 'login'
        })
      })
    }

    const openModal = () => {
      emit('open-modal')
    }

    // return
    return {
      doLogout,
      openModal
    }
  }
})
</script>import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'
