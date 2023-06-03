import { createStore } from 'vuex'

const store = createStore({
  state: {
    login: null
  },
  mutations: {
    setLogin(state, payload) {
      state.login = payload;
    }
  }
});

export default store;
