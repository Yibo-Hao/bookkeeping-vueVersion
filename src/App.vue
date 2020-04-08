<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class App extends Vue {
  created() {
    const before = document.querySelector("#before") as HTMLElement;
    setTimeout(() => {
      before.remove();
    }, 1000);
  }
}
</script>
<style lang="scss">
@import "src/assets/style/reset.scss";
@import "src/assets/style/helper.scss";
#app {
  line-height: 1.5;
  font-family: $font-hei;
  color: #333333;
  font-size: 16px;
}
</style>
