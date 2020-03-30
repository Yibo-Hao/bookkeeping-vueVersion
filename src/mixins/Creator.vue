
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import store from "@/store";

@Component
export default class Creator extends Vue {
  get tags() {
    return store.state.taglist;
  }
  createTag() {
    const name = window.prompt("请输入标签名") as string;
    store.commit("create", name);
  }
  created() {
    store.commit("fetchTags");
  }
}
</script>
