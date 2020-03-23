<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Types"
};
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";
.types {
  background: #c4c4c4;
  display: flex;
  font-size: 24px;
  li {
    width: 50%;
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
    }
  }
}
</style>
