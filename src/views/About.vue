<template>
  <div class="job-details">
    <div
      class="company-details"
      :style="nightBackground"
    >
      <b-row>
        <b-col md="4">
          <img :src="job.company_logo" width="100" height="100" />
        </b-col>
        <b-col md="4">
          <p
            class="company-text"
            :style="nightColor"
          >
            {{ job.company }}
          </p>
          <p
            class="company-small"
            :style="nightColor"
          >
            {{ job.company }}
          </p>
        </b-col>
        <b-col md="4">
          <b-button class="company-site-button" variant="outline-primary"
            >Company Site</b-button
          >
        </b-col>
      </b-row>
    </div>
    <div
      class="job-description"
      :style="nightBackground"
    >
      <b-row>
        <b-col md="12">
          <p
            class="align-left"
            :style="nightColor"
          >
            {{ job.type }}
          </p>
          <p class="align-left title">
            <span :style="nightColor">{{
              job.title
            }}</span>
            <span class="apply-now"
              ><b-button variant="primary">Apply Now</b-button></span
            >
          </p>
          <p class="align-left location">{{ job.location }}</p>
        </b-col>
      </b-row>
      <b-row>
        <p
          class="description"
          :style="nightColor"
          v-html="job.description"
        ></p>
      </b-row>
    </div>
    <div class="how-to-apply">
      <h4 class="align-left">How To Apply</h4>
      <p class="align-left" v-html="job.how_to_apply"></p>
    </div>
    <div class="apply-section">
      <b-row>
        <b-col md="12">
          <p class="align-left title">
            <span :style="nightColor">{{
              job.title
            }}</span>
            <span class="apply-now"
              ><b-button variant="primary">Apply Now</b-button></span
            >
          </p>
          <p class="align-left company-small">{{ job.company }}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    let job = this.$store.state.jobs[this.$route.params.id];
    return {
      job: job,
    };
  },
  computed: {
    ...mapGetters([
      "nightMode",
    ]),
    nightBackground() {
      return { background: this.nightMode ? '#131822' : '#FFFFFF' };
    },
    nightColor(){
      return { color: this.nightMode ? '#FFFFFF' : 'black' };
    }

  },
};
</script>
<style scoped>
.job-details {
  width: 50%;
  margin: 0 25% 0 25%;
}
@media (min-width: 200px) and (max-width: 401px) {
  .job-details {
    width: 80%;
    margin: 0 10% 0 10%;
  }
}
.description,
.align-left {
  text-align: left;
}
.description {
  padding: 3%;
}
.apply-now {
  float: right !important;
}
.company-text {
  padding-top: 20px;
  font-weight: bold;
}
.title {
  font-weight: bold;
  font-size: 25px;
}
.location {
  color: #5865e0;
}
.company-site-button {
  margin-top: 25px;
}
.company-small {
  font-size: x-small;
}
.company-details,
.job-description {
  border: 1px solid transparent;
  border-radius: 5px;
}
.company-details {
  margin-top: -4%;
}

.job-description,
.how-to-apply {
  padding: 20px;
  margin-top: 5%;
}

.how-to-apply {
  background: #5865E0;
  color: #FFFFFF;
  border: 1px solid transparent;
  border-radius: 5px;
}
</style>