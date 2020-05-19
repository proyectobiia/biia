<template lang="pug">
  footer.footer.fullpage#footer
    a.btn-scrolltop(href='#hero', v-smooth-scroll) Scroll to top
    a.btn-whatsapp(href='#')
      img.btn-whatsapp__icon(src='~@/assets/images/icons/whatsapp.svg')
    .footer-content
      .footer-text
        img.footer-logo(src='~@/assets/images/logo-white.png')
        p.footer-terms
          router-link(to='/terminos-condiciones') Aviso de privacidad / Términos y condiciones
        p.footer-rights BIIA. Todos los derechos reservados {{(new Date()).getFullYear()}}
</template>

<script>

  export default {
    name: 'custom-footer',
    methods: {
      scrollToTop() {
        window.scrollTo(0,0)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/base/_fonts';

  @import '~@/assets/styles/utils/_colors';
  @import '~@/assets/styles/utils/_mixins';

  @import '~@/assets/styles/components/_button';

  .footer {
    @include isFlex(flex-end, center);
    padding: 34px 36px 50px 35px;
    background: rgba($dark, 0.8);
    height: 450px;
    position: relative;
  }

  .btn-scrolltop {
    font-family: 'Soleil';
    font-size: 18px;
    letter-spacing: 1.8px;
    color: white;
    position: absolute;
    top: 34px;
    left: 35px;
    text-transform: uppercase;
    &:hover {
      &:before {
        bottom: -16px;
      }
    }
    &:before {
      content: '';
      height: 3px;
      position: absolute;
      bottom: -19px;
      background: $turquoise;
      width: 115px;
      transition: 0.2s ease-out all;
    }
  }

  .btn-whatsapp {
    position: absolute;
    right: 70px;
    top: -50px;
    transition: 0.2s ease-out all;
    &:hover {
      transform: rotate(-5deg);
    }
  }
  .btn-whatsapp__icon  {
    width: 120px;
  }

  .footer-content {
    @include isFlex(flex-end, center);
    // height: 100%;
    font-family: 'Soleil';
    font-size: 18px;
    letter-spacing: 1.8px;
    color: white;
  }
  .footer-text {
    text-align: center;
  }
  .footer-logo {
    width: 100px;
  }
  .footer-terms {
    margin-top: 80px;
    a {
      color: white;
    }
  }
  .footer-rights {
    text-transform: uppercase;
    margin-top: 12px;
  }

  /*
    Responsive
  */
  @media screen and (max-width: 800px) {
    .footer {
      padding: 11px 15px;
      padding-top: 30px;
      height: 350px;
    }
    .btn-scrolltop {
      font-size: 16px;
    }
    .btn-whatsapp {
      top: -30px;
      right: 15px;
    }
    .btn-whatsapp__icon  {
      width: 90px;
    }
    .footer-content {
      font-size: 12px;
    }
    .footer-logo {
      width: 80px;
    }
  }

</style>
