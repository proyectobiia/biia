<template lang="pug">
  nav.navbar(:style='{backgroundColor: bgColor, position: position}')
    ul.navbar-ul
      li.navbar-li.navbar-li__logo
        router-link.navbar-a.navbar-a__logo(to='/') Logo
      li.navbar-li
        router-link.navbar-a(to='/brokers') Brokers
      li.navbar-li
        router-link.navbar-a(to='/aprende') Aprende
    .navbar-mobile
      .navbar-mobile__ul
        li.navbar-mobile__li
          router-link.navbar-a.navbar-a__logo(to='/') Logo
        li.menu__bars(@click='openMobileMenu()')
          span.menu__bar
          span.menu__bar
          span.menu__bar
      transition(name='slide')
        .mobile-nav(v-if='mobileMenuOpen', @click='closeMobileMenu()')
          slot
          ul.mobile-nav__ul
            li.mobile-nav__li
              router-link(to='/brokers').mobile-nav__a(@click.stop='') Brokers
            li.mobile-nav__li
              router-link(to='/aprende').mobile-nav__a(@click.stop='') Aprende
</template>

<script>

  export default {
    name: 'navbar',
    props: {
      bgColor: String,
      position: String,
    },
    data() {
      return {
        mobileMenuOpen: false,
      }
    },
    methods: {
      openMobileMenu() {
        this.mobileMenuOpen = true
      },

      closeMobileMenu() {
        this.mobileMenuOpen = false
      },
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
    height: 160px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
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

  // Mobile
  .menu__bars {
    @include isFlex(center, space-between, column);
    width: 50px;
    height: 40px;
    cursor: pointer;
    z-index: 3;
  }
  .menu__bar {
    width: 100%;
    height: 3px;
    background: white;
  }
  .navbar-mobile {
    // position: absolute;
    // top: 0;
    padding: 0 15px;
    width: 100%;
    display: none;
    min-height: 100%;
  }
  .navbar-mobile__ul {
    @include isFlex(center, space-between);
  }
  .mobile-nav {
    z-index: 3;
    width: 90%;
    background: $dark;
    padding: 40px;
    box-shadow: -15px 3px 25px 0 rgba(0, 0, 0, 0.16);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    transition: 0.2s ease-out all;
  }

  .mobile-nav__ul {
    text-align: left;
  }
  .mobile-nav__li {
    & + .mobile-nav__li {
      margin-top: 30px;
    }
  }
  .mobile-nav__a {
    font-family: 'AvenirRoman';
    font-size: 20px;
    letter-spacing: 2px;
    color: white;
    text-transform: uppercase;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
    transition: all 0.3 ease-in 0s
  }

  @media screen and(max-width: 768px) {
    .navbar {
      height: 100px;
      padding: 30px 15px;
    }
    .navbar-ul {
      display: none;
    }
    .navbar-mobile {
      display: block;
    }
  }
</style>
