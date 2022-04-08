<template>
  <div class="container">
    <h3>Blocklist</h3>
    <div class="container">
      <input v-model="idToBlock" type="text" />
      <button
        @click="blockThis"
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Block this
      </button>
    </div>
    <ul class="collection with-header">
      <li
        v-for="blockedID in blockListData"
        v-bind:key="blockedID"
        class="collection-item"
      >
        <div>
          {{ blockedID }}
          <button
            @click="removeBlock(blockedID)"
            class="secondary-content waves-effect waves-light btn-small"
          >
            Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlocklistView",
  data: function () {
    return {
      blockListData: [
        "MOH-1978.54",
        "MOH-1978.55",
        "MOH-1978.56",
        "MOH-1978.57",
      ],
      idToBlock: "MOH-1978.58",
    };
  },
  methods: {
    blockThis() {
      this.blockListData.push(this.idToBlock);
    },
    removeBlock(id) {
      this.blockListData.splice(this.blockListData.indexOf(id), 1);
    },
  },
};
</script>

<style></style>
