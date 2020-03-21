<template>
  <div>
    <router-link to="/money">
      <svg>
        <use xlink:href="#money"></use>
      </svg>
    </router-link>

    <router-link to="/labels">
      <svg>
        <use xlink:href="#labels"></use>
      </svg>
      labels
    </router-link>

    <router-link to="/statistic">
      <svg>
        <use xlink:href="#statistic"></use>
      </svg>
      statistic
    </router-link>
  </div>
</template>

<script lang="ts">
import x from "@/assets/icons/labels.svg";
import y from "@/assets/icons/money.svg";
import z from "@/assets/icons/statistic.svg";

console.log(y);
console.log(x);
console.log(z);

export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped></style>
