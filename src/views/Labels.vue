<template>
  <div>
    <Layout>
      <ol class="tags">
        <li class="head"></li>
        <li v-for="tag in tags" :key="tag">
          <span>{{ tag }}</span>
          <Icon :name="'right'" />
        </li>
      </ol>
      <div class="wrapper">
        <button class="newTag" @click="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagslistmodel";

tagListModel.fetch();

@Component
export default class Labels extends Vue {
  tags = tagListModel.data;

  createTag() {
    const name = window.prompt("请输入标签名");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    tagListModel.create(name!);
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";
.tags {
  background: white;
  font-size: 16px;
  > .head {
    min-height: 22px;
    background: $color-yellow;
  }

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0.3px #d9d9d9;
    padding-left: 16px;
    padding-right: 10px;
  }
}

.wrapper {
  text-align: center;
  padding: 16px;

  > .newTag {
    background: $color-yellow;
    padding: 5px;
    border-radius: 4px;
  }
}
</style>
