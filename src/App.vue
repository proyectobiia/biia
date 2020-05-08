<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">

@import '~@/assets/styles/layout/_general';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
