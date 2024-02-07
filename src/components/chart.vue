<template>
  <div class="bg-white p-4">
    <canvas v-chartDirective="{ data: data }"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import chartDirective from '../directives/chartDirective';

export default defineComponent({
  name: 'Chart',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  directives: {
    chartDirective,
  },
});
</script>
