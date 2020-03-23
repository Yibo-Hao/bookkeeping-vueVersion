<template>
  <div>
    <Layout classPrefix="layout">
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
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注:</span>
          <input type="text" placeholder="写点备注吧~" />
        </label>
      </div>

      <div class="tags">
        <div class="new">
          <button>新增标签</button>
        </div>
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money"
};
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 12px;
      margin-right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4px;
    }
  }
  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
.notes {
  font-size: 16px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0 14px;
  .name {
    padding-right: 10px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
  }
}
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
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
