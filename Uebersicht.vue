<template>
  <div class="">
    <Allgemein />
    <Angebote />
    <Projektinformationen />
    <ProjektMitarbeiter />
    <Tabelle1 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Allgemein from "../components/Uebersicht/Allgemein.vue";
import Angebote from "../components/Uebersicht/Angebote.vue";
import ProjektMitarbeiter from "../components/Uebersicht/ProjektMitarbeiter.vue";
import Projektinformationen from "../components/Uebersicht/Projektinformationen.vue";
import Tabelle1 from "../components/Uebersicht/Tabelle1.vue";

@Component({
  components: {
    Allgemein,
    Angebote,
    ProjektMitarbeiter,
    Projektinformationen,
    Tabelle1,
  },
})
export default class Uebersicht extends Vue {}
</script>

<style scoped>
</style>