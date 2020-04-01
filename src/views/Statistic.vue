<template>
  <Layout>
    <Types class="stypes" :type.sync="type" />
    <!--    <Tabs class="stags" :data.sync="insideData" />-->
    <ol>
      <li v-for="(group, index) in groupedList" :key="index">
        <h3 class="title">
          <span>{{ beautify(group.title) }}</span>
          <span>{{ count(group) }}</span>
        </h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span class="tag">{{ item.tag }}</span>
            <span>{{ item.type }}￥{{ item.amount }} </span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import Types from "@/components/money/Types.vue";
import Tabs from "@/components/Tabs.vue";
import dayjs from "dayjs";

@Component({
  components: { Tabs, Types }
})
export default class Statistic extends Vue {
  type = "-";
  insideData = "day";
  get recordList() {
    return this.$store.state.recordlist as RecordItem[];
  }
  get groupedList() {
    const recordList = this.recordList;
    if (recordList.length === 0) {
      return [];
    }
    const newList = JSON.parse(JSON.stringify(recordList))
      .filter((r: RecordItem) => r.type === this.type)
      .sort(
        (a: RecordItem, b: RecordItem) =>
          dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
      );
    const result: result[] = [
      {
        title: dayjs(newList[0].createAt).format("YYYY-MM-DD"),
        items: [newList[0]]
      }
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createAt).format("YYYY-MM-DD"),
          items: [current]
        });
      }
    }
    return result;
  }
  count(group: result) {
    let total = 0;
    for (let i = 0; i < group.items.length; i++) {
      total += group.items[i].amount;
    }
    return total;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      console.log("hi");
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日");
    } else {
      return day.format("YYYY年M月D日");
    }
  }
}
</script>

<style lang="scss" scoped>
.stypes::v-deep .types {
  position: relative;
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
}
.title {
  @extend %item;
  background: #ffffe5;
}
.record {
  background: white;
  @extend %item;
  box-shadow: 0 0 0.3px #d9d9d9;
}
.tag {
  margin-right: auto;
  margin-left: 5px;
  color: #999;
}
</style>
