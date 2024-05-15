<template>
  <q-page padding>
    <user-main />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserMain from 'src/components/dashboard/users/main.vue';

export default defineComponent({
  name: 'UsersPage',
  components: {
    UserMain
  }
})
</script>
