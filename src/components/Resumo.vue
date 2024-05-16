<template>
  <!-- Onde fica a parte visual do projeto (html) -->
</template>

<script>
export default {
  // Nome do componente
  name: "Resumo",

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
};
</script>

<style></style>
