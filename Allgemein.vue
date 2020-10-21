<template>
  <div>
    <h2 style="margin-left: 250px">
      Projektstammblatt<button style="margin-left: 200px">bearbeiten</button>
    </h2>
    <tabelle-1></tabelle-1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Allgemein extends Vue {}
</script>

<style scoped>
</style>