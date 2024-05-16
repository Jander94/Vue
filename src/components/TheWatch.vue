<template>
  <div>
    <h1>Watch</h1>
    <div>Name: <input type="text" class="form" v-model="name" /></div>

    <h1>Watch with Object</h1>
    <div>
      Age: <input type="number" class="form" v-model="user.age" /> Sex:
      <input type="text" class="form" v-model="user.sex" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheWatch",

  data() {
    return {
      name: "",
      user: {
        age: "",
        sex: "",
      },
    };
  },

  watch: {
    name(newValue, oldValue) {
      console.log(
        `Changed name:\nOld value: ${oldValue}\nNew Value: ${newValue}`
      );
    },
    user: {
      handler() {
        console.log("user :>> ", this.user);
      },
      deep: true,
    },
  },
};
</script>

<style>
.form {
  width: 250px;
  height: 40px;
}
</style>
