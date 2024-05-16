<template>
  <h2>Em aberto</h2>
  <div v-for="item in emAberto" :key="item.id">
    <input type="checkbox" v-model="item.completed" />
    <span>{{ item.title }}</span>
  </div>

  <h2>Finalizado</h2>
  <div v-for="item in finalizado" :key="item.id">
    <input type="checkbox" v-model="item.completed" />
    <span>{{ item.title }}</span>
  </div>

  <h2>Todos</h2>
  <div v-for="item in lista" :key="item.id">
    <span
      >{{ item.title }} -
      {{ item.completed ? "Finalizada" : "Em aberto" }}</span
    >
  </div>
</template>

<script>
export default {
  name: "TheComputed",
  data() {
    return {
      lista: [
        {
          id: 1,
          title: "Tarefa 1",
          completed: false,
        },
        {
          id: 2,
          title: "Tarefa 2",
          completed: false,
        },
        {
          id: 3,
          title: "Tarefa 3",
          completed: false,
        },
        {
          id: 4,
          title: "Tarefa 4",
          completed: true,
        },
      ],
    };
  },

  methods: {},

  computed: {
    emAberto() {
      return this.lista.filter((i) => !i.completed);
    },
    finalizado() {
      return this.lista.filter((i) => i.completed);
    },
  },
};
</script>

<style></style>
