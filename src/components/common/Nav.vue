<template lang="pug">
  nav.navbar
    ul.navbar-ul
      li.navbar-li.navbar-li__logo
        router-link.navbar-a.navbar-a__logo(to='/') Logo
      li.navbar-li
        router-link.navbar-a(to='/brokers') Brokers
      li.navbar-li
        router-link.navbar-a(to='/aprende') Aprende
</template>

<script>

  export default {
    name: 'navbar',
    props: {
      bgColor: String,
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

  // Imports
  @import '~@/assets/styles/base/_fonts';

  @import '~@/assets/styles/utils/_colors';
  @import '~@/assets/styles/utils/_mixins';

  @import '~@/assets/styles/components/_button';

  .navbar {
    box-shadow: 0 15px 25px 0 rgba(black, 0.16);
    background-color: $turquoise;
    height: 160px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    padding: 50px;
  }
  .navbar-ul {
     @include isFlex(center, space-between);
     height: 100%;
  }
  .navbar-li {
    & + .navbar-li {
      margin-left: 50px;
    }
  }
  .navbar-li__logo {
    margin-right: auto;
  }
  .navbar-a {
    font-family: 'Soleil';
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    padding: 0 10px 5px 10px;
    border-bottom: 1px solid transparent;
    &:hover:not(.navbar-a__logo) {
      border-color: white;
    }
  }
</style>
