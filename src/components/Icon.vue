<template>
  <svg class="icon">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script lang="ts">
import x from "@/assets/icons/labels2.svg";
import y from "@/assets/icons/money.svg";
import z from "@/assets/icons/statistic.svg";
import m from "@/assets/icons/delete.svg";
import n from "@/assets/icons/right.svg";
console.log(y);
console.log(x);
console.log(z);
console.log(m);
console.log(n);

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
