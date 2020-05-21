<template lang="pug">
  nav.navbar(:style='{backgroundColor: bgColor, position: position}')
    ul.navbar-ul
      li.navbar-li.navbar-li__logo
        router-link.navbar-a__logo.navbar-a(to='/')
          img.navbar-a__img(src='~@/assets/images/logo-white.png', alt='BIIA', title='BIIA')
      li.navbar-li
        router-link.navbar-a(to='/brokers') Brokers
      li.navbar-li
        router-link.navbar-a(to='/aprende') Aprende
    .navbar-mobile
      .navbar-mobile__ul
        li.navbar-mobile__li
          router-link.navbar-a.navbar-a__logo(to='/')
            img.navbar-a__img(src='~@/assets/images/logo-white.png', alt='BIIA', title='BIIA')
        li.menu__bars(@click='openMobileMenu()')
          span.menu__bar
          span.menu__bar
          span.menu__bar
      transition(name='slide')
        .mobile-nav(v-if='mobileMenuOpen', @click='closeMobileMenu()')
          slot
          img.mobile-nav__img(src='~@/assets/images/logo-white.png', alt='BIIA', title='BIIA')
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
    height: 140px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    padding: 0 50px;
    transition: 0.2s ease-out all;
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

  .navbar-a__img {
    width: 50px;
    vertical-align: middle;
    display: inline-block;
  }
  .navbar-a {
    font-family: 'Soleil';
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    padding: 0 10px 5px 10px;
    border-bottom: 1px solid transparent;
    transition: 0.2s ease-out all;
    &:hover:not(.navbar-a__logo) {
      border-color: white;
    }
    &.navbar-a__logo {
      padding: 0;
    }
  }



  // Mobile
  .menu__bars {
    @include isFlex(center, space-between, column);
    width: 50px;
    height: 40px;
    cursor: pointer;
    z-index: 10;
  }
  .menu__bar {
    width: 100%;
    height: 3px;
    background: white;
  }
  .navbar-mobile {
    // position: absolute;
    // top: 0;
    width: 100%;
    display: none;
    height: 100%;
  }
  .navbar-mobile__ul {
    @include isFlex(center, space-between);
    height: 100%;
  }
  .mobile-nav {
    z-index: 10;
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

  .mobile-nav__img {
    margin: 0 auto;
    display: block;
    width: 50px;
  }
  .mobile-nav__ul {
    text-align: left;
    margin-top: 45px;
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
    border-bottom: 1px solid transparent;
  }

  .router-link-active:not(.navbar-a__logo) {
    border-color: white;
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

  // Responsive
   @media screen and(max-width: 1024px) {
    .navbar {
      height: 100px;
      padding: 0 25px;
    }
    .navbar-a {
      font-size: 14px;
    }
  }

  @media screen and(max-width: 768px) {
    .navbar {
      height: 80px;
      padding: 0 15px;
    }
    .navbar-ul {
      display: none;
    }
    .navbar-mobile {
      display: block;
    }

    .navbar-a__img {
      width: 35px;
    }
    .menu__bars {
      height: 30px;
      width: 40px;
    }
  }

  @media screen and(max-width: 480px) {
    .navbar {
      height: 45px;
    }
    .navbar-a__img {
      width: 20px;
    }
    .menu__bars {
      height: 25px;
      width: 30px;
    }
  }
</style>
