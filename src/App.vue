<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="js">
import Vue from 'vue'
export default new Vue({
  created(){
    const before = document.querySelector('#before');
    console.log(before);
    setTimeout(()=>{
      before.remove()
    },1000)

  }
})
</script>
<style lang="scss">
@import "src/assets/style/reset.scss";
@import "src/assets/style/helper.scss";
/*@import "src/assets/style/before.scss";*/
#app {
  line-height: 1.5;
  font-family: $font-hei;
  color: #333333;
  font-size: 16px;
}
</style>
