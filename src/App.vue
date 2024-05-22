<template>
  <!-- <TesteFor /> -->
  <!-- <TesteFormulario /> -->
  <!-- <TheEventos /> -->
  <!-- <TheComputed /> -->
  <!-- <TheWatch /> -->
  <!-- <LifeCycle /> -->

  <!-- <TheSlot>
    <template v-slot:title> Slots </template>
    <template v-slot:description>
      <div v-html="descriptionSlots"></div>
    </template>
    slot default
  </TheSlot> -->

  <ThePropsEmit v-if="showMsg" type="succes" @close="closeMsg">
    ... enviado com sucesso!
  </ThePropsEmit>
</template>

<script>
// import TesteFor from "./components/TesteFor.vue";
// import TesteFormulario from "./components/TesteFormulario.vue";
// import TheEventos from "./components/TheEventos.vue";
// import TheComputed from "./components/TheComputed.vue";
// import TheWatch from "./components/TheWatch.vue";
// import LifeCycle from "./components/LifeCycle.vue";
// import TheSlot from "./components/TheSlot.vue";
import { descriptionSlots } from "./utils/index";
import ThePropsEmit from "./components/ThePropsEmit.vue";

export default {
  name: "App",
  components: {
    // TesteFor,
    // TesteFormulario,
    // TheEventos,
    // TheComputed,
    // TheWatch,
    // LifeCycle,
    // TheSlot,
    ThePropsEmit,
  },

  data() {
    return {
      descriptionSlots,
      showMsg: true,
    };
  },

  mounted() {
    // console.log(this.$el);
  },

  methods: {
    closeMsg() {
      this.showMsg = false;
    },
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
