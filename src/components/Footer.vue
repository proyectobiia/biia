<template lang="pug">
  footer.footer.fullpage#footer
    a.btn-scrolltop.clickable(href='#hero', v-smooth-scroll) Scroll to top
    a.btn-whatsapp(href='https://wa.me/5215525098248', target="_blank")
      img.btn-whatsapp__icon(src='~@/assets/images/icons/whatsapp.svg', title='Whatsapp', alt='Whatsapp')
    .footer-content
      .footer-text
        img.footer-logo(src='~@/assets/images/logo-white.png', title='BIIA', alt='BIIA')
        p.footer-terms
          router-link.clickable(to='/terminos-condiciones') Aviso de privacidad / Términos y condiciones
        p.footer-rights BIIA. Todos los derechos reservados {{(new Date()).getFullYear()}}
        p.footer-links
          a.btn-social(href='https://www.facebook.com/pages/category/Product-Service/BIIA-106236047693293/', target='_blank')
            img.btn-social__icon(src='~@/assets/images/icons/facebook.png', title='Facebook', alt='Facebook')
          a.btn-social(href='https://instagram.com/biia.lat?igshid=kv2tz50zwwln', target='_blank')
            img.btn-social__icon(src='~@/assets/images/icons/instagram.png', title='Instagram', alt='Instagram')

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
    background: #414a4f;
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

  .footer-links {
    margin-top: 12px;
    display: flex;
    justify-content: space-evenly;
  }

  .btn-social__icon {
    width: 40px;
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

  @media screen and (max-width: 480px) {
    .footer-logo {
      width: 60px;
    }
  }

  @media screen and (max-width: 360px) {
    .footer-logo {
      width: 50px;
    }
  }

</style>
