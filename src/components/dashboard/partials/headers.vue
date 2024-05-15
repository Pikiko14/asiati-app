<template>
  <section class="row">
    <div class="col-12 col-md-6">
      <span class="text-primary text-h5 text-weight-semi-bold">
        {{ title }}
      </span>
    </div>
    <div class="col-12 col-md-6">
      <section class="full-width row">
        <div class="col-12 col-md-8">
        </div>
        <div class="col-12 col-md-4">
          <q-btn @click="openModal" rounded size="12pt" :label="btnLabel" no-caps unelevated color="primary"
            class="full-width"></q-btn>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
  props: {
    title: String,
    btnLabel: String
  },
  emits: [
    'open-modal'
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    // methods
    const openModal = () => {
      emit('open-modal')
    }

    // return
    return {
      openModal
    }
  }
})
</script>
