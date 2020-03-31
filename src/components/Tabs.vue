<template>
  <ul class="tabs">
    <li
      v-for="item in datasource"
      :key="item.value"
      @click="select(item)"
      :class="item.value === data ? 'selected' : ''"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tabs extends Vue {
  @Prop({ required: true }) readonly data!: string;
  datasource: DataSource[] = [
    { text: "日", value: "day" },
    { text: "周", value: "week" },
    { text: "月", value: "mouth" }
  ];
  select(item: DataSource) {
    if (item.value !== this.data) {
      this.$emit("update:data", item.value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";
.tabs {
  background: #f5f5f5;
  display: flex;
  font-size: 16px;
  position: relative;
  width: 100vw;
  li {
    flex-grow: 1;
    padding: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      border-bottom: 4px solid;
      bottom: 0;
      left: 0;
      background: #333;
    }
    &.selected {
      background: $color-yellow;
      border-bottom: 1px black solid;
    }
  }
}
</style>
