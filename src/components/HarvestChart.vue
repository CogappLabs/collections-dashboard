<template>
  <Line :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
import { Line } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "LineChart",
  components: { Line },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    chartData: {
      types: Object,
    },
  },
  data() {
    return {
      //   chartData: {
      //     labels: ["January", "February", "March"],
      //     datasets: [{ data: [40, 20, 12] }],
      //   },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>

<style></style>
