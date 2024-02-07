<template>
  <div>
    <Header />
    <Chart :data="chartData" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Header from './components/header.vue';
import Chart from './components/chart.vue';
import Footer from './components/footer.vue';
import fetchData from '../fetch_data/';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Chart,
    Footer,
  },
  setup() {
    const chartData = ref([]);

    onMounted(async () => {
      chartData.value = await fetchData();
    });

    return { chartData };
  },
});
</script>

<style>
</style>
