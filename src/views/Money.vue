<template>
  <div>
    <Layout classPrefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saverecord" />
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
import store from "@/store";

/*version*/
const version = window.localStorage.getItem("version") || "0";
if (version === "0.0.1") {
  store.state.recordlist.forEach(record => {
    record.createAt = new Date(2020, 0, 1);
  });
  window.localStorage.setItem(
    "recordList",
    JSON.stringify(store.state.recordlist)
  );
}
window.localStorage.setItem("version", "0.0.2");
/*version*/

@Component({
  components: { Tags, Notes, Types, NumberPad },
  computed: {
    recordlist() {
      return this.$store.state.recordlist;
    }
  }
})
export default class Money extends Vue {
  record: RecordItem = {
    tag: "住",
    notes: "",
    type: "-",
    amount: 0
  };
// 除去tag之外其他的直接同步
  onUpdateTag(value: string) {
    this.record.tag = value;
  }
  saverecord() {
    store.commit("saveRecord",this.record);
  }
  created() {
    store.commit("fetchRecords");
    store.commit("fetchTags");
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
