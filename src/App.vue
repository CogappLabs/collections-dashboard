<template>
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/analytics">Collection analytics</router-link></li>
        <li><router-link to="/objectlookup">Object lookup</router-link></li>
        <li><router-link to="/blocklist">Blocklist</router-link></li>
        <li><router-link to="/harvest">Harvest</router-link></li>
        <li><router-link to="/facetedsearch">Facets</router-link></li>
        <li><router-link to="/wikidatalookup">Wikidata lookup</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
