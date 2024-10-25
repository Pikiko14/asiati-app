<template>
  <q-card class="round-10 modal-card q-px-lg q-py-md">
    <q-card-section>
      <span class="text-h5 text-weight-bold text-primary">{{ title }}</span>
      <q-btn v-close-popup rounded size="7pt" flat dense class="float-right q-mt-sm" icon="close">
        <q-tooltip>
          Cerrar
        </q-tooltip>
      </q-btn>
    </q-card-section>
    <q-card-section style="margin-top: -10px">
      <slot name="body"></slot>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ModalCard',
  props: {
    title: String,
  }
})
</script>
