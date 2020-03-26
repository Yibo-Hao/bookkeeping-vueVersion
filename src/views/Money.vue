<template>
  <div>
    <Layout classPrefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Types :type.sync="record.type" />
      <Notes :value.sync="record.notes" />
      <Tags :data-source.sync="tags" @update:value="onUpdateTag" />
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from "@/components/money/NumberPad.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import recordlistmodel from "@/models/recordlistmodel";
import tagListModel from "@/models/tagslistmodel";

const version = window.localStorage.getItem("version") || "0";

const recordList = recordlistmodel.fetch();
const tagList = tagListModel.fetch();

if (version === "0.0.1") {
  recordList.forEach(record => {
    record.createAt = new Date(2020, 0, 1);
  });
  window.localStorage.setItem("recordList", JSON.stringify(recordList));
}

window.localStorage.setItem("version", "0.0.2");

@Component({
  components: { Tags, Notes, Types, NumberPad }
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  record: RecordItem = {
    tag: "住",
    notes: "",
    type: "-",
    amount: 0
  };

  onUpdateTag(value: string) {
    this.record.tag = value;
  }
  saveRecord() {
    const recordFake: RecordItem = recordlistmodel.clone(this.record);
    recordFake.createAt = new Date();
    this.recordList.push(recordFake);
    //监听ok，会接受一个record，push进rL,从而引起watch
  }
  @Watch("recordList")
  onRecordChange() {
    recordlistmodel.save(recordList);
    //监听rL一旦变化就push进数据库
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
