<template>
  <TheHeader />
  <!-- <TesteFor /> -->
  <!-- <TesteFormulario /> -->
  <!-- <TheEventos /> -->
  <!-- <TheComputed /> -->
  <!-- <TheWatch /> -->
  <LifeCycle />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import TesteFor from "./components/TesteFor.vue";
// import TesteFormulario from "./components/TesteFormulario.vue";
// import TheEventos from "./components/TheEventos.vue";
// import TheComputed from "./components/TheComputed.vue";
// import TheWatch from "./components/TheWatch.vue";
import LifeCycle from "./components/LifeCycle.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    // TesteFor,
    // TesteFormulario,
    // TheEventos,
    // TheComputed,
    // TheWatch,
    LifeCycle,
  },

  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
