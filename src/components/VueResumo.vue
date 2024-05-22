<template>
  <!-- Onde fica a parte visual do projeto (html) -->
  <div></div>
</template>

<script>
export default {
  // Nome do componente
  name: "VueResumo",

  // DATA É uma função que retorna um objeto.
  // Onde são declaradas as variáveis reativas
  // Semelhante ao useState do react
  data() {
    return {
      name: "",
      user: {
        age: "",
        sex: "",
      },
    };
  },

  // METHODS é um objeto onde são declaradas as funções que serão utilizadas no componente.
  // O retorno da função criada no method será montado toda vez que a função for chamada (diferente do COMPUTED).
  methods: {},

  // Computed é um objeto onde serão declaras funções que serão tratadas como variáveis, ou campos normais.
  // O retorno da função criada no computed será montado apenas uma vez (diferente do METHODS), e será remontado
  // apenas se alguma dependência utilizada na função for alterada.
  // Computa um valor final que depende de outro valor.
  computed: {},

  // Observadores de atributos.
  // Por padrão a função recebe o novo valor e o valor anterior.
  watch: {
    // No exemplo abaixo, a função name será chamada sempre que o atribudo name for alterado.
    name(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
    // Essa forma é usada para escutar alterações dentro de objetos.
    // Nesse exemplo, sempre que age ou sex for alterado esse método será chamado.
    // Se colocasse apenas o nome do objeto como no exemplo anterior, esse seria chamado apenas se alterasse a estrutura do objeto.
    user: {
      handler() {
        console.log("user :>> ", this.user);
      },
      deep: true,
    },
  },

  // -------------- HOOKS ---------------//

  // Detalhes no componente: LifeCycle.vue

  // Antes do componente ser criado.
  // Não tem acesso ao estado
  // Não tem acesso ao template (DOM)
  beforeCreate() {},

  // O componente foi criado.
  // Tem acesso ao estado
  // Não tem acesso ao template (DOM)
  created() {},

  // Antes do componente ser montado.
  // Tem acesso ao estado
  // Não tem acesso ao template (DOM)
  beforeMount() {},

  // O componente foi montado.
  // Tem acesso ao estado
  // Tem acesso ao template (DOM)
  mounted() {},

  // Antes do componente ser desmontado.
  beforeUnmount() {},

  // O componente foi desmontado.
  unmounted() {},
};
</script>

<style></style>
