<template>
  <div id="app">
    <div class="header-container">
      <b-container>
        <b-row class="job-header">
          <b-col sm="3" class="dev-jobs-header-section">
            <h2 class="dev-jobs-header">devjobs</h2>
          </b-col>
          <b-col sm="9" class="toggle-container">
            <div @click="onToggle">
              <span v-if="!nightMode" class="toggle-button"><b-icon icon="toggle-off"></b-icon></span>
              <span v-else class="toggle-button"><b-icon icon="toggle-on"></b-icon></span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      nightMode: false,
    };
  },
  methods: {
    onToggle() {
      this.nightMode = !this.nightMode;
      this.$el.style.backgroundColor = this.nightMode ? "#131822" : "#f5f6f8";
    },
  },
  mounted() {
    this.$el.style.backgroundColor = "#f5f6f8";
  },
};
</script>

<style>
.header-container {
  background: #5865e0;
  height: 100px;
  border-bottom-left-radius: 100px;
}
.dev-jobs-header-section {
  margin-top: 15px;
}
.dev-jobs-header {
  color: #ffffff;
}
.job-header {
  width: 90% !important;
  margin-left: 10px;
}
.toggle-container{
  margin-top: 5px;
}
.toggle-button{
  font-size: 40px;
  float: right;
  color: #ffffff;
}
</style>
