<template>
  <nav>
    <router-link to="/money" class="items">
      <Icon name="money" />
      记账
    </router-link>

    <router-link to="/labels" class="items">
      <Icon name="labels" />
      标签
    </router-link>

    <router-link to="/statistic" class="items">
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
    flex-grow:1;
    flex-direction: column;
    .icon{
      width: 32px;
      height: 32px;
    }
  }
}
</style>
