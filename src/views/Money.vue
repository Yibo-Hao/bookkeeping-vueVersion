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
import {Component, Watch} from "vue-property-decorator";

type Record = {
  tag: string;
  notes: string;
  type: string;
  amount: number;
};

@Component({
  components: { Tags, Notes, Types, NumberPad }
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = [];
  record: Record = {
    tag: "住",
    notes: "",
    type: "-",
    amount: 0
  };

  onUpdateTag(value: string) {
    this.record.tag = value;
  }
  saveRecord() {
    this.recordList.push(this.record)

  }
  @Watch('recordList')
  onRecordChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
