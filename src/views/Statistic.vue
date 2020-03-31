<template>
  <Layout>
    <Types class="stypes" :type.sync="type" />
    <Tabs class="stags" :data.sync="insideData" />
    <ol>
      <li v-for="group in result" :key="group.title">
        <h3 class="title">{{ beautify(group.title) }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span class="tag">{{ item.tag }}</span>
            <span>￥{{ item.amount }} </span>
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
  get result() {
    const recordList = this.recordList;
    type Items = RecordItem[];
    type HashTableValue = { title: string; items: Items };
    const hashTable: { [key: string]: HashTableValue } = {};
    //         今天             明天
    //   record  record   record  record
    // 今天 record【】 今天 record【】
    for (let i = 0; i < recordList.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const [date, time] = recordList[i].createAt!.split("T");
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      console.log('hi');
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
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
