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

  // Section
  .info-section__container {
    padding: 30px 0;
  }

  .section-subtitle {
    font-family: 'Soleil';
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 2.8px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s ease-out all;
    padding: 0 30px;
  }

  // Responsive

  // Height
  @media screen and (max-height: 700px) {
    .info-section {
      height: 700px;
    }
  }

  // Width
  @media screen and(max-width: 768px) {
    .section-subtitle {
      font-size: 18px;
      padding: 0 15px;
    }
  }

  @media screen and (max-width: 640px) {
    .info-section__container {
      width: 100%;
    }
  }



</style>
