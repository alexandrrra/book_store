import { createStore } from 'vuex'

const store = createStore({
  state: {
    login: null,
    productsCount: 0
  },
  mutations: {
    setLogin(state, payload) {
      state.login = payload;
    },
    setProductsCount(state, payload) {
      state.productsCount = payload;
    }
  }
});

export default store;
