<template>
  <div>
    <label class="notes">
      <span class="name">{{this.fieldName}}:</span>
      <input type="text" v-model="valueInside" :placeholder="`写点${fieldName}吧~`" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop() readonly value!: string;
  @Prop({required:true}) readonly fieldName!: string;
  valueInside = this.value;
  @Watch("valueInside")
  onValueChanged(valueInside: string) {
     this.$emit("update:value", valueInside);
  }

}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  .name {
    padding-right: 10px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
  }
}
</style>
