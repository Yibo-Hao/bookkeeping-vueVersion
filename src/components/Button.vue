<template>
  <div class="wrapper">
    <button class="newTag">
        <slot/>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {
}
</script>

<style lang="scss" scoped>
    @import "src/assets/style/helper.scss";
.wrapper {
  text-align: center;
  padding: 16px;

  > .newTag {
    background: $color-yellow;
    padding: 5px;
    border-radius: 4px;
  }
}
</style>
