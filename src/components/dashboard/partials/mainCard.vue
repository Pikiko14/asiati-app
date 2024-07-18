<template>
  <div class="dashboard-card" :class="{ 'is-yellow': isYellow, 'is-green': isGreen }">
    <div class="row full-width">
      <div class="col-10 q-pt-md">
        <p class="title-card text-weight-semi-bold">{{ title }}</p>
        <p class="amount-card text-weight-semi-bold">
          <span v-if="isPrice">{{ amount > 0 ? utils.formatPrice(amount) : '$0' }}</span>
          <span v-else>{{ amount }}</span>
        </p>
        <p class="label-card">{{ label }}</p>
      </div>
      <div class="col-2">
        <div class="icon-card">
          <q-icon :name="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Utils } from 'src/utils/utils';

export default defineComponent({
  name: 'MainCardComponent',
  props: {
    title: {
      type: String,
      default: 'Flujo de caja'
    },
    amount: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: '-'
    },
    icon: {
      type: String,
      default: 'img:/images/calculator.svg'
    },
    isPrice: {
      type: Boolean,
      default: true
    },
    isYellow: {
      type: Boolean,
      default: false
    },
    isGreen: {
      type: Boolean,
      default: false
    },
  },
  setup() {
    // references
    const utils = new Utils('dashboard');

    // return
    return {
      utils
    }
  }
})
</script>
