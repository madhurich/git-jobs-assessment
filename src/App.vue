<template>
  <div id="app">
    <div class="header-container">
      <b-container>
        <b-row class="job-header">
          <b-col class="dev-jobs-header-section">
            <h2 class="dev-jobs-header">devjobs</h2>
          </b-col>
          <b-col class="toggle-container">
            <div style="float:right">
              <label class="brightness-icon"><b-icon icon="brightness-high-fill" class="color-white" font-scale="1.2"></b-icon></label>
              <label @click="onToggle" class="toggle-icon">
                <b-icon class="color-white" v-if="!nightMode" icon="toggle-off" font-scale="1.7"></b-icon>
                <b-icon class="color-white" v-else icon="toggle-on" font-scale="1.7"></b-icon>
              </label>
              <label><b-icon icon="moon" class="color-white" font-scale="1.2"></b-icon></label>
              </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <router-view />
  </div>
</template>
<script>
import {mapMutations} from 'vuex';
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "nightMode",
    ]),
  },
  methods: {
    onToggle() {
      this.toggleMode();
      this.$el.style.backgroundColor = this.nightMode ? "black" : "#f5f6f8";
    },
    ...mapMutations(["toggleMode"]),
    ...mapMutations({
      toggleMode: "toggleMode",
    }),
  },
  mounted() {
    this.$el.style.backgroundColor = "#f5f6f8";
  },
};
</script>

<style>
#app {
  padding-bottom: 50px;
}
.header-container {
  background: #5865e0;
  height: 100px;
  border-bottom-left-radius: 75px;
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
  margin-top: 23px;
  padding-right: 0px;
}
.toggle-button{
  font-size: 40px;
  float: right;
  color: #ffffff;
}
.color-white {
  color: #FFFFFF;
}
.brightness-icon{
  padding-right: 15px;
}
.toggle-icon{
  padding-right: 15px;
}
@media (max-width:574px){
  .header-container {
    border-bottom-left-radius: 0px;
  }
}
</style>
