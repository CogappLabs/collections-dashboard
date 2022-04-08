<template>
  <div class="container">
    <h3>Collection analytics</h3>
    <p>These should be tables or graphs</p>
    <h4>Popular search terms</h4>
    <ol>
      <li v-for="item in popularSearchTerms" v-bind:key="item">
        <a
          :href="`https://mit-museum-frontend-git-develop-mit-museum.vercel.app/collections/search-results?query=${item.term}`"
          >{{ item.term }}: {{ item.count }}</a
        >
      </li>
    </ol>
    <h4>Popular objects</h4>
    <ol>
      <li v-for="item in popularObjects" v-bind:key="item">
        <a
          :href="`https://mit-museum-frontend-git-develop-mit-museum.vercel.app/collections/object/${item.objectNumber}`"
        >
          {{ item.title }}: {{ item.views }}</a
        >
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "CollectionAnalyticsView",
  data: function () {
    return {
      popularSearchTerms: [
        { term: "Boats", count: 20000 },
        { term: "Horse", count: 5000 },
        { term: "Banana", count: 1000 },
        { term: "Blackboard", count: 200 },
      ],
      popularObjects: [
        { title: "Horse", views: 20000, objectNumber: "MOH-1993.47.007" },
        {
          title: "High-speed photography, bullet and banana - 1978",
          views: 5000,
          objectNumber: "HEE-NC-64001",
        },
        {
          title: "Sword and Relics of Admiral Duncan",
          views: 200,
          objectNumber: "CC-E-0029",
        },
      ],
    };
  },
};
</script>

<style></style>
