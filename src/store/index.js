import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [],
    nightMode: false,
    noResults: null,
    isFailure: null,
  },
  mutations,
  getters,
  actions,
})
