<template>
  <v-app>
    <div>
      <router-view />
    </div>
  </v-app>
</template>

<script setup>
//
</script>

<style>
/* Ensure all parent elements have height: 100% */
html,
body,
#app,
.v-application {
  height: 100%;
  margin: 0;
}
</style>