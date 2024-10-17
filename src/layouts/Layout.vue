<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-if="$route.path !== '/' && $route.path !== '/login' && $route.path !== '/recovery'" :width="120"
      v-model="leftDrawerOpen" show-if-above class="q-pa-md">
      <menu-component @open-modal="configurationModal = true" />
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>

    <!--Dialog configuration-->
    <q-dialog v-model="configurationModal">
      <ModalCard title="Configuración">
        <template v-slot:body>
          <ConfigurationComponent />
        </template>
      </ModalCard>
    </q-dialog>
    <!--End dialog configuration-->
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MenuComponent from 'src/components/partials/menu.vue';
import ModalCard from 'src/components/dashboard/partials/modalCard.vue';
import ConfigurationComponent from 'src/components/partials/configuration.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    ModalCard,
    MenuComponent,
    ConfigurationComponent
  },

  setup() {
    const leftDrawerOpen = ref(false)
    const configurationModal = ref(false)

    return {
      leftDrawerOpen,
      configurationModal,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
