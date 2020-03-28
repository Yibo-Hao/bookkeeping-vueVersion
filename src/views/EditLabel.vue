<template>
  <Layout>
    <div class="navbar">
      <Icon class="leftICon" name="back" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="formWrapper">
      <Notes field-name="标签名" :place-holder="tag.name"/>
    </div>
    <Button>删除标签</Button>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagslistmodel";
import Notes from "@/components/money/Notes.vue";
import Button from "@/components/Button.vue";


@Component({
  components: { Button, Notes }
})
export default class EditLabel extends Vue {
  tag?: Tag = undefined;
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch;
    const tags = tagListModel.data;
    const tag = tags.filter(tag => tag.id === id)[0];
    if (tag) {
      this.tag = tag
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper.scss";
.navbar {
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  background: #ffffe6;
  justify-content: space-between;
  align-content: center;

  > .leftICon {
    font-size: 20px;
  }
}
.formWrapper {
  background: #ffffe6;
  margin-top: 10px;
}
</style>
