<template>
  <div class="container">
    <h3>Harvest</h3>
    <p>Last harvest run: <strong>07/04/2022</strong></p>
    <button
      @click="runHarvest"
      class="btn waves-effect waves-light"
      type="submit"
      name="action"
    >
      Run harvest
    </button>
    <p v-if="harvest">Harvest is scheduled to run in the next 5 minutes</p>
  </div>
</template>

<script>
export default {
  name: "HarvestView",
  data: function () {
    return {
      harvest: false,
    };
  },
  methods: {
    runHarvest() {
      console.log("Running harvest");
      this.harvest = true;
    },
  },
};
</script>

<style></style>
