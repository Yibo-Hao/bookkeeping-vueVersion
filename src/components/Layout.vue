<template>
    <div class="navWrapper">
        <div class="content">
            <slot/>
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">
    export default {
        name: "LayOut"
    }
</script>

<style lang="scss" scoped>
    .navWrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content {
        overflow: auto;
        flex-grow: 1;
    }
</style>