<template>
  <div class="job-details">
    <div
      class="company-details"
      :style="nightBackground"
    >
    <b-container>
      <b-row>
          <b-col sm="4">
            <img class="company-image" :src="job.company_logo" width="100" height="100" />
          </b-col>
          <b-col sm="4">
            <p class="company-text" :style="nightColor">{{ job.company }}</p>
            <p class="company-small" :style="nightColor">{{ job.company }}</p>
          </b-col>
          <b-col sm="4">
            <b-button class="company-site-button" variant="outline-primary">Company Site</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="job-description" :style="nightBackground">
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="8" class="clear-right-padding">
            <p class="align-left" :style="nightColor">{{ job.type }}</p>
            <p class="align-left title"><span :style="nightColor">{{
              job.title
            }}</span><span class="apply-now"></span></p>
            <p class="align-left location">{{ job.location }}</p>
          </b-col>
          <b-col sm="4" class="clear-left-padding clear-right-padding">
            <b-button variant="primary" class="apply-now-button margin-top35">Apply Now</b-button>
          </b-col>
        </b-row>
        <b-row>
          <p class="description" :style="nightColor" v-html="job.description"></p>
        </b-row>
      </b-container>
    </div>
    <div class="how-to-apply">
      <h4 class="align-left">How To Apply</h4>
      <p class="align-left" v-html="job.how_to_apply"></p>
    </div>
    <footer class="apply-section">
      <b-container>
        <b-row>
          <b-col class="apply-section-tile-col">
            <p class="align-left title"> <span :style="nightColor">{{
              job.title
            }}</span> <span class="apply-now"></span></p>
            <p class="align-left company-small">{{ job.company }}</p>
          </b-col>
          <b-col class="clear-right-padding apply-now-col">
            <b-button variant="primary" class="apply-now-button">Apply Now</b-button>
          </b-col>
        </b-row>
      </b-container>
    </footer>
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
.apply-now-button{
  float: right;
  background-color: #5865E0;
}
.clear-right-padding{
  padding-right: 0px;
}
.clear-left-padding{
  padding-left: 0px;
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
  float: right;
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
.apply-section{
  margin-top: 35px;
}
.margin-top35{
  margin-top: 35px;
}
@media (max-width:574px){
  .job-details {
    width: 80%;
    margin: 0 10% 0 10%;
  }
  .company-details{
    padding-bottom: 25px;
  }
  .company-site-button{
    margin-left: 29%;
  }
  .apply-now-button{
    float:none;
    width: 100%;
    margin-top: 5px;
  }
  .apply-section-tile-col{
    display: none;
  }
  .apply-now-col{
    padding-left: 0px;
  }
  .company-site-button{
    float:none;
  }
  .company-text, .company-small{
    margin-left: 28%;
  }
  .company-text{
    margin-top:35px;
  }
  .company-image{
  border: 1px solid transparent;
  border-radius: 5px;
  position: absolute;
  top: -25px;
  left: 35%;
}
}
</style>