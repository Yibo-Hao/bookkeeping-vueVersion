<template>
  <div>
    nav
    <hr/>
    <router-view/>
    <div>
      <router-link to="/money">money</router-link>
      |
      <router-link to="/labels">labels</router-link>
      |git
      <router-link to="/statistic">statistic</router-link>
    </div>
  </div>
</template>

<style lang="scss">

</style>
