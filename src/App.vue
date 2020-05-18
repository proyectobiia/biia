<template lang="pug">
  #app
    router-view
    custom-footer

</template>

<script>
  import CustomFooter from '@/components/Footer'

  export default {
    name: 'App',
    components: {
      CustomFooter
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/styles/layout/_general';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // Responsive
  @media screen and (max-height: 700px) {
    .info-section {
      height: 700px;
    }
  }
</style>
