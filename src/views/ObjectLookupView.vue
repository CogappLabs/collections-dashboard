<template>
  <div class="container">
    <h3>Object lookup</h3>
    <input type="text" v-model="objectNumber" />
    <button
      v-on:click="searchObject(objectNumber)"
      class="btn waves-effect waves-light"
      type="submit"
      name="action"
    >
      Submit
    </button>
    <div v-if="objectData.media" class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img :src="objectData.media[0].file.publicUrl" />
          </div>
          <div class="card-content">
            <span class="card-title">{{ objectData.title }}</span>
            <p>
              {{ truncateText(objectData.description) }}
            </p>
          </div>
          <div class="card-action">
            <a :href="objectLink">View on object page</a>
          </div>
        </div>
      </div>
    </div>

    <pre v-if="objectData">{{ objectData }}</pre>
  </div>
</template>

<script>
import collectionAPI from "@/api";

export default {
  name: "ObjectLookupView",
  data: function () {
    return {
      objectNumber: "1983.075.002",
      objectData: "",
    };
  },
  methods: {
    searchObject(objectNumber) {
      collectionAPI.getCollectionObject(objectNumber).then((response) => {
        console.log("doing a thing");
        this.objectData = response.data.collectionObject;
      });
      return;
    },
    truncateText(text) {
      if (text.length > 100) {
        return text.substring(0, 100) + "...";
      } else {
        return text;
      }
    },
  },
  computed: {
    objectLink() {
      return `https://mit-museum-frontend-git-develop-mit-museum.vercel.app/collections/object/${this.objectNumber}`;
    },
  },
};
</script>

<style></style>
