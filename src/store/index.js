import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const initialPayload = {
  search: '',
  fulltime: null,
  location: '',
  pageNum: 1,
};

export default new Vuex.Store({
  state: {
    jobs: [],
    nightMode: false,
    noResults: null,
    isFailure: null,
  },
  mutations: {
    setJobs(state, payload) {
      state.jobs = payload.isFilter ? [...payload.jobs] : [...state.jobs, ...payload.jobs];
    },
    toggleMode(state) {
      state.nightMode = !state.nightMode;
    },
    noResults(state, payload){
      state.noResults = payload.value;
    },
    failure(state, payload) {
      state.isFailure = payload.value;
    },
  },
  actions: {
    getJobs(context, payload = initialPayload) {
      let location = payload.location;
      let isZip = location.match(/^[0-9]{5}(?:-[0-9]{4})?$/);
      let geoLocation = '';

      //check if location string has coordinates
      if (/\d/.test(location) && !isZip) {
        let locationArr = location.split(',');
        let latitude = locationArr[0];
        let longitude = locationArr[1];
        geoLocation = '&lat=' + latitude + '&long=' + longitude;
      }

      if (location.indexOf(' ') >= 0) {
        location = location.split(' ').join('+');
      }
      // let myprefixurl = "https://warm-brook-90018.herokuapp.com/";
      let prefixurl = "https://cors-anywhere.herokuapp.com/";
      let searchFilter = payload.search ? '&search=' + payload.search : '';
      let locationFilter = payload.location && !geoLocation ? '&location=' + payload.location : '';
      let fullTimeFilter = payload.fulltime ? '&fulltime=' + payload.fulltime : '';
      let finalFilter = searchFilter + (geoLocation ? geoLocation : locationFilter) + fullTimeFilter;

      let url = (prefixurl + "https://jobs.github.com/positions.json?page=" + payload.pageNum + finalFilter);
      return axios.get(url).then((res) => {
        if(finalFilter && res.data.length === 0) {
          context.commit('noResults', {value: true});
        }else {
          context.commit('noResults', {value: false});
        }
        context.commit('setJobs', { jobs: res.data, isFilter: finalFilter });
      })
      .catch(err => {
        context.commit('failure', {value: err})       
      });
    },
  },
  modules: {
  }
})
