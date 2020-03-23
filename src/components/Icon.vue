<template>
  <svg class="icon">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script lang="ts">
import x from "@/assets/icons/labels.svg";
import y from "@/assets/icons/money.svg";
import z from "@/assets/icons/statistic.svg";
console.log(y);
console.log(x);
console.log(z);
export default {
  name: "icons",
  props: ["name"]
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
