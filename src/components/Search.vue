<template>
  <b-container class="header-search">
    <b-row class="search-container">
      <b-col sm="4" class="filtertype-container">
        <b-input-group>
          <b-input-group-prepend is-text class="search-icon-div">
            <b-icon icon="search" class="search-icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            class="search-field"
            placeholder="filterby title, company, skill"
            type="text"
            v-model="filterType"
          ></b-form-input>
          <b-input-group-append is-text class="mb-search-filter">
            <label class="funnel-mb"><b-icon icon="funnel" v-model="fulltime"></b-icon></label>
            <b-button @click="onSearch" class="search-button" variant="primary"><b-icon icon="search"></b-icon></b-button>
          </b-input-group-append>
        </b-input-group>

      </b-col>
      <b-col sm="4" class="location-container">
        <b-input-group>
          <b-input-group-prepend is-text class="remove-border">
            <b-icon icon="geo-alt-fill" class="geo-alt-fill-icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            class="location"
            placeholder="filterby location"
            type="text"
            v-model="location"
          ></b-form-input>
        </b-input-group>
      </b-col>
      <b-col sm="4" class="check-fulltime-container">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-form-checkbox v-model="fulltime"> Full Time Only</b-form-checkbox>
          </b-input-group-prepend>
          <b-input-group-append class="search-button-div">
            <b-button @click="onSearch" class="search-button" variant="primary">Search</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      filterType: "",
      location: "",
      fulltime: null,
    };
  },
  mounted() {
    this.getCurrentLocation();
  },
  methods: {
    onSearch() {
      let payload = {
        search: this.filterType,
        location: this.location,
        fulltime: this.fulltime,
        pageNum: 1,
      };
      this.$store.dispatch("getJobs", payload);
    },
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        return;
      }
    },
    showPosition(position) {
      this.location =
        position.coords.latitude + "," + position.coords.longitude;
    },
  },
};
</script>

<style scoped>
.search-field,
.check-fulltime-container,
.location {
  height: 55px;
}
.location, .search-field {
  border: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 1px solid gray;
}
.filtertype-container {
  padding-right: 0px;
}
.location-container {
  padding-left: 0px;
  padding-right: 0px;
}
.search-icon, .geo-alt-fill-icon {
  color: #5865e0;
  border: none;
}
.search-icon-div .input-group-text{
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}
.search-field:focus, .location:focus{
  box-shadow: none;
}
.input-group-text {
  background-color: #ffffff;
  border: none;
  border-radius: 0px;
}
.check-fulltime-container {
  background-color: #ffffff;
  padding-top: 8px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
.remove-border {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.label-fulltime {
  padding-left: 15px;
  font-weight: 700;
}
.search-button {
  width: 100%;
  margin-left: 0px;
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
  background: #5865e0;
}
.search-button-div{
  width: 35%;
  margin-left: 12%;
}
.search-container {
  width: 90% !important;
  margin-left: 15px;
}
.header-search {
  margin-top: -2%;
}
.mb-search-filter{
  display: none;
}
@media (max-width:574px){
  .header-search {
    margin-top: -7%;
  }
  .location-container{
    display: none;
  }
  .check-fulltime-container{
    display: none;
  }
  .mb-search-filter{
    display: flex;
  }
  .mb-search-filter .input-group-text{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .search-icon-div{
    display: none;
  }
  .search-field{
    border: none;
    border-top-left-radius: 7px !important;
    border-bottom-left-radius: 7px !important;
  }
  .filtertype-container{
    padding-left: 0px;
  }
  .funnel-mb{
    margin-right: 10px;
    margin-bottom: 0px !important;
  }
}
</style>
