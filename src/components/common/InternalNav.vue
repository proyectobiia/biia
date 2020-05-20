<template lang="pug">
  //- Internal Nav
  nav.internal-nav(:class='{ fixed: isMenuFixed }')
    ul.internal-nav__ul
      li.internal-nav__li.internal-nav__li-logo
        router-link(to='/')
          img.internal-nav__li-img(src='~@/assets/images/logo-white.png')
        a.internal-nav__a.internal-nav__a-whoarewe(href='#', @click.prevent='scrollToQuienes()') ¿Quiénes somos?
      li.internal-nav__li
        router-link.internal-nav__a(to='/brokers') Brokers
      li.internal-nav__li
        router-link.internal-nav__a(to='/aprende') Aprende

    //- Internal nav mobile
    .internal-nav__mobile(:class='{ fixed: isMenuFixed }')
      .navbar-mobile__ul
        li.internal-nav__li.internal-nav__li-logo
          router-link.internal-nav__a.internal-nav__a-logo(to='/')
            img.internal-nav__li-img(src='~@/assets/images/logo-white.png')
        li.menu__bars(@click='handleMobileMenu()')
          span.menu__bar
          span.menu__bar
          span.menu__bar

      transition(name='slide')
        .mobile-nav(v-if='mobileMenuOpen', @click='handleMobileMenu()')
          slot
          img.mobile-nav__img(src='~@/assets/images/logo-white.png')
          ul.mobile-nav__ul
            li.mobile-nav__li
              router-link(to='/brokers').mobile-nav__a(@click.stop='') Brokers
            li.mobile-nav__li
              router-link(to='/aprende').mobile-nav__a(@click.stop='') Aprende
</template>

<script>
  export default {
    name: 'internal-nav',
    data() {
      return {
        mobileMenuOpen: false,
        isMenuFixed: false,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.checkScrollPosition)
      window.addEventListener('resize', this.checkScrollPosition)
    },
    created() {
      window.addEventListener('scroll', this.checkScrollPosition)
      window.addEventListener('resize', this.checkScrollPosition)
    },
    destroyed() {
      window.removeEventListener('scroll', this.checkScrollPosition)
      window.removeEventListener('resize', this.checkScrollPosition)
    },
    methods: {
      // Fn: Get scroll position
      checkScrollPosition() {
        this.isMenuFixed = window.scrollY > window.innerHeight ? true : false
      },

      // Fn: Handle mobile menu
      handleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen
      },

      scrollToQuienes() {
        this.$emit('scrollToQuienesSomos')
      },
    }
  }
</script>

<style lang="scss" scoped>

  @import '~@/assets/styles/utils/_colors';
  @import '~@/assets/styles/utils/_mixins';

  // Internal nav
  .internal-nav__wrapper {
    width: 100%;
  }
  .internal-nav {
    position: absolute;
    top: 0;
    padding: 0 50px;
    z-index: 3;
    width: 100%;
    transition: 0.2s ease-out all;
    height: 80px;
    line-height: 80px;
    &.fixed {
      position: fixed;
      top: 0;
      background: $dark;
      z-index: 3;
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);

      .internal-nav__li-img {
        width: 40px;
      }
      .internal-nav__a {
        font-size: 16px;
      }
      .internal-nav__ul {
        padding-top: 0;
      }
    }
  }
  .internal-nav__ul {
    @include isFlex(center, space-between);
    // padding-top: 30px;
  }
  .internal-nav__li {
    & + .internal-nav__li {
      margin-left: 50px;
    }
  }

  .internal-nav__li-logo {
    margin-right: auto;
  }
  .internal-nav__li-img {
    width: 35px;
    display: inline-block;
    vertical-align: middle;
    transition: 0.2s ease-out all;
  }
  .internal-nav__a {
    font-family: 'Soleil';
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    padding: 0 10px 5px 10px;
    border-bottom: 1px solid transparent;
    &:hover:not(.internal-nav__a-logo)  {
      border-color: white;
    }
    &.internal-nav__a-logo {
      padding: 0;
    }
  }
  .internal-nav__a-whoarewe {
    margin-left: 35px;
  }

  // Mobile nav
  .menu__bars {
    @include isFlex(center, space-between, column);
    width: 50px;
    height: 40px;
    cursor: pointer;
    right: 15px;
    top: 0;
  }
  .menu__bar {
    width: 100%;
    height: 3px;
    background: white;
  }
  .internal-nav__mobile {
    position: absolute;
    top: 0;
    padding: 0 15px;
    width: 100%;
    display: none;
    height: 80px;
    right: 0;
    line-height: 80px;
    &.fixed {
      position: fixed;
      top: 0;
      background: $dark;
      z-index: 3;
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
    }
  }
  .navbar-mobile__ul {
    @include isFlex(center, space-between);
    z-index: 3;
    position: relative;
    width: 100%;

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
    line-height: normal;
  }
  .mobile-nav__img {
    width: 50px;
  }
  .mobile-nav__ul {
    text-align: left;
    margin-top: 45px;
  }
  .mobile-nav__li {
    line-height: 1;
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
  .router-link-active:not(.internal-nav__a-logo) {
    border-color: white;
  }

  // Slide animation
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
  @media screen and(max-width: 768px) {
    .internal-nav__ul {
      display: none;
    }
    .internal-nav__mobile {
      display: block;
    }
  }

  @media screen and(max-width: 480px) {
    .internal-nav__li-img {
      width: 35px;
    }
    .menu__bars {
      height: 30px;
      width: 40px;
    }
  }
</style>
