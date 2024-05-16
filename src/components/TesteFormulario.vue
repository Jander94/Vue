<template>
  <div class="container">
    <div class="chunk">
      <span>Name: </span>
      <input v-model="name" class="form" />
      <p>{{ name }}</p>
    </div>

    <div class="chunk">
      <span>Sports: </span>
      <select v-model="sport" class="form">
        <option value="">select</option>
        <option value="soccer">soccer</option>
        <option value="skateboard">skateboard</option>
        <option value="trail">trail</option>
      </select>
      <p>{{ sport }}</p>
    </div>

    <div class="chunk">
      <span>Sex:</span>
      <label
        ><input type="radio" v-model="sex" value="Masculine" />Masculine</label
      >
      <label>
        <input type="radio" v-model="sex" value="Feminine" /> Feminine</label
      >
      <p>{{ sex }}</p>
    </div>

    <div class="chunk">
      <span>Colors:</span>
      <input type="checkbox" v-model="colors" value="blue" />blue
      <input type="checkbox" v-model="colors" value="red" /> red
      <input type="checkbox" v-model="colors" value="pink" /> pink
      <input type="checkbox" v-model="colors" value="black" /> black
      <p>{{ colors }}</p>
    </div>

    <div class="chunk">
      <span>Accept the terms: </span> <br />
      <input type="checkbox" v-model="accept" /> terms...
      <p>{{ accept ? "Yes" : "No" }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TesteFormulario",
  data() {
    return {
      name: "jander",
      sport: "",
      sex: "",
      colors: [],
      accept: false,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.chunk {
  margin: 10px;
  border: 1px solid lightgray;
  width: 30%;
  border-radius: 10px;
  padding: 20px;
}
.form {
  width: 250px;
  height: 40px;
}
</style>
