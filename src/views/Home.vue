<template>
  <div>
    <Search />
    <div class="all-jobs">
      <b-container class="bv-example-row">
        <b-row>
          <!-- <div > -->
          <b-col
            sm="3"
            class="single-job"
            v-for="(job, index) in jobs"
            :key="index"
          >
            <router-link :to="{ path: '/' + index }">
              <img :src="job.company_logo" width="50" height="50" />
              <div class="short-details">
                <p class="type">{{ job.type }}</p>
                <p class="title">{{ job.title }}</p>
                <p class="company">{{ job.company }}</p>
                <p class="location">{{ job.location }}</p>
              </div>
            </router-link>
          </b-col>
          <!-- </div> -->
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col sm="12"
            ><b-button @click="loadMore" class="load-more" variant="primary"
              >Load More</b-button
            ></b-col
          >
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Search from "@/components/Search.vue";
import { mapActions } from "vuex";

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
    jobs() {
      return this.$store.state.jobs;
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
  mounted() {
    // this.scroll();
  },
};
</script>
<style scoped>
.single-job {
  text-align: left;
  background: #ffffff;
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
  color: black;
  font-weight: bold;
}
.location {
  color: #5865e0;
  font-size: small;
}
</style>