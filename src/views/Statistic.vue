<template>
    <Layout>
      <Types class="stypes" :type.sync="type"/>
      <Tabs class="stags" :data.sync="data"/>
    </Layout>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import Types from "@/components/money/Types.vue";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: {Tabs, Types }
})
export default class Statistic extends Vue {
  type = '-';
  data = 'week'
}
</script>

<style lang="scss" scoped>
.stypes::v-deep .types{
    position: relative;
}
.stags::v-deep {

}

</style>
