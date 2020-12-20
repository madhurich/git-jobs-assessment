<template>
  <div>
    <Search />
    <div class="all-jobs">
      <b-container class="bv-example-row all-jobs-container">
        <b-row class="no-results">
          <b-col sm="12">
            <p v-if="noResults">
              No results found for specified search criteria
            </p>
            <p class="failure" v-if="FailureMsg">
              {{ FailureMsg }}
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            sm="3"
            class="single-job"
            :style="backgroundColor"
            v-for="(job, index) in jobs"
            :key="index"
          >
            <router-link :to="{ path: '/' + index }">
              <img :src="job.company_logo" width="50" height="50" />
              <div class="short-details">
                <p class="type">{{ job.type }}</p>
                <p class="title" :style="textColor">
                  {{ job.title }}
                </p>
                <p class="company">{{ job.company }}</p>
                <p class="location">{{ job.location }}</p>
              </div>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid class="bv-example-row margin-top35">
        <b-row>
          <b-col md="4" offset-md="6" sm="5" offset-sm="5" class="load-more-button-col">
            <b-button @click="loadMore" class="load-more" variant="primary">Load More</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    Search,
  },
  name: "Home",
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters(["jobs", "noResults", "nightMode"]),
    ...mapGetters({
      FailureMsg: "isFailure",
    }),
    textColor() {
      return { color: this.nightMode ? "#FFFFFF" : "black" };
    },
    backgroundColor() {
      return { background: this.nightMode ? "#131822" : "#FFFFFF" };
    },
  },
  methods: {
    ...mapActions(["getJobs"]),
    ...mapActions({
      getJobs: "getJobs",
    }),
    loadMore() {
      this.pageNumber++;
      let payload = {
        search: "",
        fulltime: null,
        location: "",
        pageNum: this.pageNumber,
      };
      this.getJobs(payload);
    },
  },
  created() {
    this.getJobs();
  },
};
</script>
<style scoped>
.single-job {
  text-align: left;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px;
  margin-left: 4%;
  margin-top: 5%;
  box-sizing: border-box;
}
.all-jobs {
  width: 100%;
}
img {
  border: 1px solid transparent;
  border-radius: 5px;
  position: absolute;
  top: -25px;
  left: 20px;
}
.short-details {
  padding-top: 30px;
}
.type,
.company {
  color: #b3b3b3;
}
.title {
  font-weight: bold;
}
.location {
  color: #5865e0;
  font-size: small;
}
.no-results {
  text-align: center;
  font-size: large;
}
.all-jobs-container {
  padding-right: 0px;
  padding-bottom: 0px;
}
.margin-top35 {
  margin-top: 35px;
}
.load-more {
  background-color: #5865e0;
}
.load-more-button-col {
  padding-left: 0px;
}
@media (max-width: 574px) {
  .single-job {
    margin-top: 10%;
    margin-right: 8%;
  }
  .load-more-button-col {
    margin-left: 38%;
  }
}
.failure {
  color: red;
}
</style>