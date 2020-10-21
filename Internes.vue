<template>
  <div class>
    <Regelungen />
    <Zahlungsplan />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Regelungen from "../components/Internes/Regelungen.vue";
import Zahlungsplan from "../components/Internes/Zahlungsplan.vue";

@Component({
  components: {
    Regelungen,
    Zahlungsplan,
  },
})
export default class Internes extends Vue {}
</script>

<style scoped>
</style>