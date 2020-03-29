<template>
  <div>
    <Layout classPrefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Types :type.sync="record.type" />
      <div class="noteWrapper">
        <Notes
          :value.sync="record.notes"
          :field-name="'备注'"
          :place-holder="'写点备注吧~'"
        />
      </div>
      <Tags @update:value="onUpdateTag" />
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from "@/components/money/NumberPad.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import recordlistmodel from "@/models/recordlistmodel";
import tagListModel from "@/models/tagslistmodel";

tagListModel.fetch();

const version = window.localStorage.getItem("version") || "0";
const recordList = recordlistmodel.fetch();
/*version*/
if (version === "0.0.1") {
  recordList.forEach(record => {
    record.createAt = new Date(2020, 0, 1);
  });
  window.localStorage.setItem("recordList", JSON.stringify(recordList));
}
window.localStorage.setItem("version", "0.0.2");
/*version*/

@Component({
  components: { Tags, Notes, Types, NumberPad }
})
export default class Money extends Vue {
  recordList = recordlistmodel.fetch();
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
    recordlistmodel.save();
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.noteWrapper {
  background: #f5f5f5;
}
</style>
