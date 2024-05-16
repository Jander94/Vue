<template>
  <div class="container">
    <div class="chunk">
      <input
        class="form"
        @change="changeInput"
        @keyup.enter.exact="changeEnter"
        @keyup.alt.enter="changeAltEnter"
        @keyup.up="up"
        @keyup.down="down"
        v-model="value"
      />
    </div>
    <div>{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "TheEventos",
  data() {
    return {
      value: "",
    };
  },

  methods: {
    changeInput(e) {
      this.value = e.target.value;
      alert("alterou o input");
    },
    changeEnter(e) {
      this.value = e.target.value;
      alert("apertou enter");
    },
    changeAltEnter(e) {
      this.value = e.target.value;
      alert("apertou alt + enter");
    },
    up(e) {
      this.value = e.target.value;
      alert("Apertou seta para cima");
    },
    down(e) {
      this.value = e.target.value;
      alert("Apertou seta para baixo");
    },
  },
};
</script>

<style>
.chunk {
  margin: 10px;
  border: 1px solid lightgray;
  width: 30%;
  border-radius: 10px;
  padding: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 250px;
  height: 40px;
}
</style>
