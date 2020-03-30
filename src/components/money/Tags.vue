<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tags"
        :key="tag.id"
        :class="selectedTags.indexOf(tag.name) >= 0 && 'selected'"
        @click="select(tag.name)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  get tags() {
    return this.$store.state.taglist;
  }
  selectedTags: string[] = [];
  select(tag: string) {
    if (this.selectedTags.indexOf(tag) >= 0) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    } else {
      this.selectedTags.splice(0, 1, tag);
    }
    this.$emit("update:value", this.selectedTags[0]);
  }
  create() {
    const name = window.prompt("输入标签名");
    this.$store.commit('create',name);
  }
  created(){
    this.$store.commit('fetchTags')
}
}
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
      &.selected {
        background: $color-yellow;
      }
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
</style>
