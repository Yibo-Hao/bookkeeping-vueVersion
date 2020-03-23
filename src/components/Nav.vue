<template>
  <nav>
    <router-link to="/labels" class="items" active-class="selected">
      <Icon name="labels2" />
      标签
    </router-link>
    <router-link to="/money" class="items" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>

    <router-link to="/statistic" class="items" active-class="selected">
      <Icon name="statistic" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";
nav {
  display: flex;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  flex-direction: row;
  font-size: 12px;
  > .items {
    padding: 2px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-direction: column;
    color: #707070;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .items.selected {
    opacity: 100;
    color: $color-yellow;
    font-weight: 520;
  }
}
</style>