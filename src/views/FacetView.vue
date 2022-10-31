<template>
  <div class="container">
    <input
      type="text"
      id="search"
      placeholder="Search..."
      v-model="searchTerm"
    />
    <ul class="collection with-header">
      <li
        v-for="material in materials"
        v-bind:key="material"
        class="collection-item"
      >
        <div>
          {{ material.materialName }}
          <span class="secondary-content">
            {{ material.materialCount }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FacetView.vue",
  data: function () {
    return {
      materials: [
        { materialName: "Cardboard", materialCount: 50 },
        { materialName: "Ink", materialCount: 5 },
        { materialName: "Paper", materialCount: 200 },
        { materialName: "Pencil", materialCount: 100 },
        { materialName: "Plastic", materialCount: 150 },
        { materialName: "Wood", materialCount: 5000 },
      ],
      searchTerm: "",
    };
  },
  computed: {
    // match string against searchTerm
    searchInArray() {
      return this.materials.filter(function (item) {
        console.log(this.searchTerm);
        return item.materialName
          .toLowerCase()
          .indexOf(this.searchTerm.toLowerCase());
      });
    },
  },
};
</script>

<style></style>
