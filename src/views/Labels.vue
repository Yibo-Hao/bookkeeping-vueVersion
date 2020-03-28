<template>
  <div>
    <Layout>
      <div class="tags">
        <div class="head"></div>
        <router-link v-for="tag in tags" :key="tag.id" class="li"
        :to=" `/labels/edit/${tag.id}` ">
          <span>{{ tag.name }}</span>
          <Icon :name="'right'" />
        </router-link>
      </div>
        <Button @click.native="createTag">新建标签</Button>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagslistmodel";
import Button from "@/components/Button.vue";

tagListModel.fetch();
@Component({
  components: {Button}
})
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
    border-radius: 20px;
  }

  > .li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0.3px #d9d9d9;
    padding-left: 16px;
    padding-right: 10px;
  }
}

</style>
