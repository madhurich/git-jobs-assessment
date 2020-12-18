<template>
  <b-container class="header-search">
    <b-row class="search-container">
      <b-col md="4" class="filtertype-container">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="search" class="search-icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            class="search-field"
            placeholder="filterby title, company, skill"
            type="text"
            v-model="filterType"
          ></b-form-input>
        </b-input-group>
      </b-col>
      <b-col md="4" class="location-container">
        <b-input-group>
          <b-input-group-prepend is-text class="remove-border">
            <b-icon icon="geo-alt-fill" class="search-icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            class="location"
            placeholder="filterby location"
            type="text"
            v-model="location"
          ></b-form-input>
        </b-input-group>
      </b-col>
      <b-col md="4" class="check-fulltime-container">
        <input type="checkbox" v-model="fulltime" class="check-fulltime" />
        <label class="label-fulltime">Full time only</label>
        <b-button @click="onSearch" class="button-fulltime" variant="primary"
          >Search</b-button
        >
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
form {
  width: 73%;
  margin: 0 12% 0 12%;
}
.search-field,
.check-fulltime-container,
.location {
  height: 55px;
}
.location,
.search-field {
  border: none;
}
.filtertype-container {
  padding-right: 0px;
}
.location-container {
  padding-left: 0px;
  padding-right: 0px;
}
.search-icon {
  color: #5865e0;
  border: none;
}
.input-group-text {
  background-color: #ffffff;
  border: none;
  border-radius: 0px;
}
.check-fulltime-container {
  padding-left: 0px;
  background-color: #ffffff;
  padding-top: 10px;
}
.remove-border {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.check-fulltime {
  margin-left: 10px;
}
.label-fulltime {
  padding-left: 15px;
}
.button-fulltime {
  margin-left: 15px;
}
.search-container {
  width: 90% !important;
  margin-left: 15px;
}
.header-search {
  margin-top: -2%;
}
</style>
