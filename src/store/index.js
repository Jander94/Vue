import { createStore } from "vuex";
// Vuex: Biblioteca para gerenciamento de estados globais

export default createStore({
  state: {
    // Onde serão criadas as states de acesso globais
    // Não devem ser alteradas diretamente, apenas pelas mutations
    // Como acessar: this.$store.state
    user: {
      name: "Jander",
      age: 30,
    },
    idades: [30, 25],
  },

  mutations: {
    // Onde são criadas as funções para alterar os valores das states;
    // O primeiro parâmetro da função é a própria state e o segundo é o valor recebido.
    // ex: const newValue = {nome: 'Maria', age: 25}
    // Como acessar: this.$store.commit('updateUserStore', newValue)
    updateUserStore(state, newValue) {
      state.user = newValue;
    },
  },

  getters: {
    // Funciona igual a computed
    // Funções que se alteram caso o valor de alguma dependência seja alterada
    // O primeiro parâmetro da função é a própria state
    // Como acessar: this.$store.getters.somaIdades
    // Sempre que o valor for alterado (idades), a função irá alterar o resultado.
    somaIdades(state) {
      return state.idades.reduce((total, item) => (total += item), 0);
    },
  },

  actions: {
    // Conjunto de ações/funções
    // Primeiro parâmetro é o contexto, onde poderá acessar a state, mutations, getters e outras actions
    // Segundo parâmetro são os dados que vamos alterar nas states
    // Como acessar: this.$store.dispatch('updateUserStore', data)
    // Fluxo recomendado é chamar as actions e as actions chamar as mutations para alterar as states
    // As actions retornam uma promisse, diferente das mutations
    updateUserStore(context, data) {
      context.commit("updateUserStore", data);
    },
  },

  modules: {},
});
