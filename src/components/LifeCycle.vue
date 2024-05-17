<template>
  <div>
    <h1>LyfeCicle</h1>
  </div>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "Jander",
    };
  },

  // Criação
  //   - Preparar o componente
  //   - Iniciar variáveis
  //   - Não tem acesso ao template (DOM)

  // Montagem
  //   - Inicializar uma lib externa
  //   - Precisa de acesso ao template (DOM)
  //   - Tem acesso ao template (DOM)

  // Atualização
  //   - Debug

  // Desmontagem
  //   - Remover tudo que for necessário para liberar memória

  // HOOKS:
  beforeCreate() {
    // Antes do componente ser criado.
    // Não tem acesso ao estado
    // Não tem acesso ao template (DOM)
    console.log("beforeCreate");
    console.log("ESTADO :>> ", this.name);
    console.log("DOM", this.$el); //Atributo do vue que retorna o root (div pai) do template
  },
  created() {
    // O componente foi criado.
    // Tem acesso ao estado
    // Não tem acesso ao template (DOM)
    console.log("created");
    console.log("ESTADO :>> ", this.name);
    console.log("DOM", this.$el);
  },
  beforeMount() {
    // Antes do componente ser montado.
    // Tem acesso ao estado
    // Não tem acesso ao template (DOM)
    console.log("beforeMount");
    console.log("ESTADO :>> ", this.name);
    console.log("DOM", this.$el);
  },
  mounted() {
    // O componente foi montado.
    // Tem acesso ao estado
    // Tem acesso ao template (DOM)
    console.log("mounted");
    console.log("ESTADO :>> ", this.name);
    console.log("DOM", this.$el);
  },
  beforeUnmount() {
    // Antes do componente ser desmontado.
    console.log("beforeUnmount");
    console.log("ESTADO :>> ", this.name);
    console.log("DOM", this.$el);
  },
  unmounted() {
    // O componente foi desmontado.
    console.log("unmounted");
    console.log("ESTADO :>> ", this.name);
    console.log("DOM", this.$el);
  },
};
</script>

<style></style>
