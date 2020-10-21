<template>
  <div>
    <Uebersicht />
    <Internes />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Internes from "./Internes.vue";
import Uebersicht from "./Uebersicht.vue";

@Component({
  components: {
    Internes,
    Uebersicht,
  },
})
export default class Projektstammblatt extends Vue {}
</script>

<style scoped>
</style>