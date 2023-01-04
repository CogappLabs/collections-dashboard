<template>
  <div class="container">
    <h3>Wikidata lookup</h3>
    <table class="responsive-table">
      <tr>
        <th>Author name</th>
        <th>Matched name</th>
        <th>Matched description</th>
        <th>Matched ID/URL</th>
        <th>Action</th>
      </tr>
      <tr v-for="record in wikidataResults" v-bind:key="record">
        <td>
          {{ record.authorName }}
        </td>
        <td>
          {{ record.wikidataMatchName }}
        </td>
        <td>
          {{ record.wikidataMatchDescription }}
        </td>
        <td>
          <a :href="record.wikidataMatchURL">{{ record.wikidataMatchID }}</a>
        </td>
        <td>
          <button class="btn-small btn-margin waves-effect waves-light">
            Accept</button
          ><button class="btn-small btn-margin waves-effect waves-light">
            Reject</button
          ><button class="btn-small btn-margin waves-effect waves-light">
            Manually replace
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "WikiData",
  data: function () {
    return {
      wikidataResults: [
        {
          authorName: "Edgerton, Harold Eugene",
          wikidataMatchName: "Harold Eugene Edgerton",
          wikidataMatchDescription: "American engineer and inventor",
          wikidataMatchID: "Q475733",
          wikidataMatchURL: "https://www.wikidata.org/wiki/Q475733",
        },
        {
          authorName: "Klein, Martin",
          wikidataMatchName: "Martin Klein",
          wikidataMatchDescription: "Estonian wrestler",
          wikidataMatchID: "Q942043",
          wikidataMatchURL: "https://www.wikidata.org/wiki/Q942043",
        },
      ],
    };
  },
};
</script>

<style>
.btn-margin {
  margin: 5px;
}
</style>
