<template>
  <div :class="baseClass">
    <slot />
    <button @click="click">X</button>
  </div>
</template>

<script>
export default {
  name: "ThePropsEmit",

  props: {
    type: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },

  computed: {
    baseClass() {
      return ["container", "alert", this.type ? `alert-${this.type}` : ""];
    },
  },

  methods: {
    click() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.container {
  width: 30%;
  min-width: 350px;
  display: flex;
  justify-content: space-around;
}
.alert {
  background-color: gray;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  font-size: 20px;
}

.alert-succes {
  background-color: rgb(10, 212, 10);
  color: #fff;
  padding: 10px;
  font-size: 20px;
  border-radius: 6px;
}
.alert-warning {
  background-color: rgb(189, 201, 22);
  color: #fff;
  padding: 10px;
  font-size: 20px;
  border-radius: 6px;
}
</style>
