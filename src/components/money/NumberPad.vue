<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="count">+</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="count">-</button>
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <router-link to="/statistic">
        <button class="ok" @click="ok">完成</button>
      </router-link>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove"><Icon name="delete" /></button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = "0";
  inputContent(event: MouseEvent) {
    if (this.output.length >= 14) {
      return;
    }
    if (event.target) {
      const button = event.target as HTMLButtonElement;
      const input = button.textContent as string;
      if (this.output === "0") {
        if (input === ".") {
          this.output = "0.";
        } else if ("0123456789".indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      } else if (this.output.indexOf(".") >= 0 && input === ".") {
        return;
      }
      this.output += input;
    }
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.substring(0, this.output.length - 1);
    }
  }

  count(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string;
    const countType: object = {
      "+": "+",
      "-": "-"
    };
    if (this.output[this.output.length - 1] in countType) {
      return;
    } else {
      this.output = this.output + input;
    }
  }
  ok() {
    this.$emit("update:value", this.output);
  }
}
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
