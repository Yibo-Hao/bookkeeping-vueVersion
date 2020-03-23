<template>
  <div class="numberPad">
    <div class="output">0.00</div>
    <div class="buttons">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="ok">完成</button>
      <button class="zero">.</button>
      <button>0</button>
      <button>删除icon</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberPad"
};
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clear-fix;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 0 16px;
    text-align: right;
  }
  .buttons {
    @extend %clear-fix;
    button {
      width: 25%;
      height: 60px;
      float: left;
      background: transparent;
      box-shadow: 0 0 0.1px #d9d9d9;
      &.ok {
        height: 60 * 2px;
        float: right;
        background: $color-yellow;
      }
    }
  }
}
</style>
