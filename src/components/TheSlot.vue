<template>
  <h1 class="title">
    <slot name="title" />
  </h1>
  <h3 class="description">
    <slot name="description" />
  </h3>
  <p class="text">
    <slot />
  </p>
</template>

<script>
export default {
  name: "TheSlot",
};
</script>

<style>
.title {
  background-color: rgb(22, 151, 226);
  height: 50px;
  color: #fff;
  font-size: 35px;
}
.description {
  background-color: rgb(192, 229, 250);
  white-space: pre-line;
  display: flex;
  text-align: start;
  padding: 25px;
}

.text {
  background-color: rgb(192, 229, 250);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
