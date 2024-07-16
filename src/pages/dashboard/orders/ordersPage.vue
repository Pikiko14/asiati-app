<template>
    <q-page padding>
        <OrdersMain />
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OrdersMain from 'src/components/dashboard/orders/main.vue';

export default defineComponent({
    name: 'UsersPage',
    components: {
        OrdersMain
    }
})
</script>
