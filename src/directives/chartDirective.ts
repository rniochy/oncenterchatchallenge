import { Directive } from 'vue';
import Chart from 'chart.js/auto';

const chartDirective: Directive = {
  mounted(el, binding) {
    const { data } = binding.value;
    const countries = data.map((country: any) => country.country);
    const confirmedCases = data.map((country: any) => country.confirmed);

    new Chart(el, {
      type: 'bar',
      data: {
        labels: countries,
        datasets: [{
          label: 'Confirmed Cases',
          data: confirmedCases,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Confirmed Cases',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
        },
      },
    });
  },
  updated(el, binding) {
    
    const { data } = binding.value;
    const countries = data.map((country: any) => country.country);
    const confirmedCases = data.map((country: any) => country.confirmed);

    const chart = Chart.getChart(el);
    if (chart) {
      chart.data.labels = countries;
      chart.data.datasets[0].data = confirmedCases;
      chart.update();
    }
  },
};

export default chartDirective;
