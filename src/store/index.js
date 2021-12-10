import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    items: {
      loading: false,
      post: {
        confirmed: {
          value: 0,
        },
        deaths: {
          value: 0,
        },
      },
      country: {
        countries: [],
      },
      error: null,
    },
  },
  mutations: {
    addToItems(state, payload) {
      state.items = { ...state.items, post: payload };
    },
    addCountryToItems(state, payload) {
      state.items = { ...state.items, country: payload };
    },
  },
  actions: {
    async getDataCovid(context) {
      await axios.get('https://covid19.mathdro.id/api', {
      }).then((res) => context.commit('addToItems', res.data)).catch((err) => console.log(err));

      await axios.get('https://covid19.mathdro.id/api/countries', {
      }).then((res) => context.commit('addCountryToItems', res.data)).catch((err) => console.log(err));
    },
  },
  modules: {
  },
});

export default store;
