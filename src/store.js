import { createStore } from 'vuex'

const store = createStore({
  state: {
    login: null,
    name: "",
    productsCount: 0
  },
  mutations: {
    setLogin(state, payload) {
      state.login = payload;
    },
    setName(state, payload) {
      state.name = payload;
    },
    setProductsCount(state, payload) {
      state.productsCount = payload;
    }
  }
});

export default store;
