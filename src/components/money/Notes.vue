<template>
  <div>
    <label class="notes">
      <span class="name">备注:</span>
      <input type="text" placeholder="写点备注吧~" />
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "Notes"
};
</script>

<style lang="scss" scoped>
.notes {
  font-size: 16px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0 14px;
  .name {
    padding-right: 10px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
  }
}
</style>
