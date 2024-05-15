<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-if="$route.path !== '/' && $route.path !== '/login' && $route.path !== '/recovery'" :width="100"
      v-model="leftDrawerOpen" show-if-above class="q-pa-md">
      <menu-component />
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MenuComponent from 'src/components/partials/menu.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    MenuComponent
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
