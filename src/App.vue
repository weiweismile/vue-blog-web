<style lang="scss">
html,
body,
#app {
  height: 100%;
  background: url(~@/assets/image/6.jpg) no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
