<template>
    <div class="layoutWrapper" :class="classPrefix&&`${classPrefix}-wrapper` ">
        <div class="content" :class="classPrefix&&`${classPrefix}-content`  ">
            <slot/>
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">
    export default {
        name: "LayOut",
        props:['classPrefix']
    }
</script>

<style lang="scss" scoped>
    .layoutWrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content {
        overflow: auto;
        flex-grow: 1;
    }
</style>