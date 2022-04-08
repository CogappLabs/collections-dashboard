<template>
  <div class="container">
    <h3>Collections data</h3>

    <div v-if="latestHarvestData">
      <ul class="collection">
        <li class="collection-item avatar">
          <i class="material-icons circle red"></i>
          <span class="title">Total Objects</span>
          <p>
            {{ latestHarvestData.objectRecords }}
          </p>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle blue"></i>
          <span class="title">Total Vessels</span>
          <p>
            {{ latestHarvestData.vesselRecords }}
          </p>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle green"></i>
          <span class="title">Total People</span>
          <p>
            {{ latestHarvestData.personRecords }}
          </p>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle orange"></i>
          <span class="title">Total media</span>
          <p>
            {{ latestHarvestData.mediaRecords }}
          </p>
        </li>
      </ul>
    </div>
    <h3>Harevst data over time</h3>
    <LineChart :chartData="harvesterChartData" :width="500" />
    <h3>All harvest data</h3>
    <div v-if="allHarvestData">
      <table v-for="harvestRecord in allHarvestData" v-bind:key="harvestRecord">
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
        <tr v-for="(data, index) in harvestRecord" v-bind:key="data">
          <td>{{ index }}</td>
          <td>
            {{ data }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import collectionAPI from "@/api";
import LineChart from "@/components/HarvestChart";

export default {
  name: "HarvestData",
  components: { LineChart },
  data: function () {
    return {
      latestHarvestData: "",
      allHarvestData: [],
    };
  },
  mounted() {
    this.getLatestHarvestData();
    this.getHarvestData();
  },
  computed: {
    harvesterDates() {
      if (this.allHarvestData.length > 0) {
        return this.allHarvestData.map((harvestRecord) => {
          return this.processDate(harvestRecord.dateProcessed);
        });
      } else {
        return [null];
      }
    },
    harvesterObjectData() {
      if (this.allHarvestData.length > 0) {
        return this.allHarvestData.map((harvestRecord) => {
          return harvestRecord.objectRecords;
        });
      } else {
        return [null];
      }
    },
    harvesterVesselsData() {
      if (this.allHarvestData.length > 0) {
        return this.allHarvestData.map((harvestRecord) => {
          return harvestRecord.vesselRecords;
        });
      } else {
        return [null];
      }
    },
    harvesterPeopleData() {
      if (this.allHarvestData.length > 0) {
        return this.allHarvestData.map((harvestRecord) => {
          return harvestRecord.personRecords;
        });
      } else {
        return [null];
      }
    },
    harvesterMediaData() {
      if (this.allHarvestData.length > 0) {
        return this.allHarvestData.map((harvestRecord) => {
          return harvestRecord.mediaRecords;
        });
      } else {
        return [null];
      }
    },
    harvesterChartData() {
      return {
        labels: this.harvesterDates,
        datasets: [
          {
            label: "Objects harvested",
            data: this.harvesterObjectData,
            borderColor: "red",
          },
          {
            label: "Vessels harvested",
            data: this.harvesterVesselsData,
            borderColor: "blue",
          },
          {
            label: "People harvested",
            data: this.harvesterPeopleData,
            borderColor: "green",
          },
          {
            label: "Media harvested",
            data: this.harvesterMediaData,
            borderColor: "orange",
          },
        ],
      };
    },
  },
  methods: {
    getLatestHarvestData() {
      collectionAPI.getLatestHarvestData().then((response) => {
        this.latestHarvestData = response;
      });
    },
    getHarvestData() {
      collectionAPI.getHarvestData().then((response) => {
        this.allHarvestData = response;
      });
    },
    processDate(dateString) {
      let date = new Date(dateString);
      return date.toLocaleDateString();
    },
  },
};
</script>

<style></style>
