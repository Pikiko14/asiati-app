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
    </q-item>
    <q-item to="/companies?page=1&perPage=12&search=" class="q-mt-sm" v-if="$hasPermission('list-business')">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat size="18pt" dense rounded name="img:/images/company.svg"></q-icon>
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item to="/users?page=1&perPage=12&search=" class="q-mt-sm" v-if="$hasPermission('list-users')">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat size="18pt" dense rounded name="img:/images/users.svg"></q-icon>
        </q-item-label>
      </q-item-section>
    </q-item>

    <!--logout items-->
    <q-item class="absolute-bottom" clickable @click="doLogout">
      <q-item-section>
        <q-item-label class="text-center">
          <q-icon flat style="margin-left: -5px" size="20pt" dense rounded name="img:/images/logout.svg"></q-icon>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'

export default defineComponent({
  name: 'MenuComponent',
  setup() {
    // references
    const router = useRouter()
    const authStore = useAuthStore()

    // methods
    const doLogout = () => {
      try {
        authStore.doLogout()
        router.push({
          name: 'login'
        })
      } catch (error) {
      }
    }

    // return
    return {
      doLogout
    }
  }
})
</script>import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'
