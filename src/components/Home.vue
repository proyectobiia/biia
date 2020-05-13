<template lang="pug">
    section.page
      //- vue-scroll-snap(:fullscreen='true')
      header.hero.item#hero
        video.hero__video(poster='~@/assets/images/hero/home.jpg', autoplay, muted, loop)
          source(src='~@/assets/videos/home.mp4', type='video/mp4')

        img.hero__logo(src='~@/assets/images/logo-color.svg')
        a(href='#brokers' v-smooth-scroll).chevron-down
          img(src='~@/assets/images/icons/chevron-down.svg')

      //- Guacamaya
      article.info-section.info-section__guacamaya.item#brokers
        //- Internal Nav
        nav.internal-nav
          ul.internal-nav__ul
            li.internal-nav__li.internal-nav__li-logo
              a.internal-nav__a(href='#quienes-somos' v-smooth-scroll) ¿Quiénes somos?
            li.internal-nav__li
              a.internal-nav__a(href='#brokers' v-smooth-scroll) Brokers
            li.internal-nav__li
              a.internal-nav__a(href='#aprende' v-smooth-scroll) Aprende

        //- Internal nav mobile
        .internal-nav__mobile
          //- input.mobile-nav__checkbox(type='checkbox' id='show-menu')
          //- label.mobile-nav__label#menu-trigger(for='show-menu')
          .menu__bars(@click='openMobileMenu()')
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

        .info-section__icon
          img.info-section__icon-img(src='~@/assets/images/animals/guacamaya.png')
        .info-section__media
        .info-section__info
          .info-section__content
            .info-section__content-top
              p.info-section__animal-sound Moo
              h3.info-section__content-title Invierte
            p.info-section__content-description
              | Reducimos tu spread hasta un
              br
              | 25% ¡Comieza Ya!
            router-link.info-section__content-button.btn-whiteopacity(to='/brokers') Saber más #[img.info-section__button-icon.btn-icon(src='~@/assets/images/icons/small-arrow.svg')]
        a(href='#aprende' v-smooth-scroll).chevron-down
          img(src='~@/assets/images/icons/chevron-down.svg')

      //- Tortuga
      article.info-section.info-section__tortuga.item#aprende
        .info-section__icon
          img.info-section__icon-img(src='~@/assets/images/animals/tortuga.png')

        .info-section__info.backwards
          .info-section__content
            .info-section__content-top
              p.info-section__animal-sound Akk
              h3.info-section__content-title Aprende
            p.info-section__content-description
              | Comienza tu carrera
              br
              | como trader
            router-link.info-section__content-button.btn-whiteopacity(to='/aprende') Saber más #[img.info-section__button-icon.btn-icon(src='~@/assets/images/icons/small-arrow.svg')]

        .info-section__media
        a(href='#quienes-somos' v-smooth-scroll).chevron-down
          img(src='~@/assets/images/icons/chevron-down.svg')

      //- ¿Quienes somos?
      article.info-section.info-section__textonly#quienes-somos
        .info-section__title ¿Quiénes somos?
        .info-section__text
          .info-section__p Hemos generado alianzas estratégicas con los mejores brokers a nivel mundial, permitiéndonos reducir tu spread hasta un 55%.
          .info-section__p En BIIA Fomentamos el buen trading de la mano de las mejores academias que generan traders rentables, consistentes y contamos con brokers que tienen las mejores regulaciones, para que operes tu capital con la mayor confianza posible.
          .info-section__p ¡No importa si tu operación es ganadora o perdedora en tu broker, con nosotros, siempre ganas!
        router-link.info-section__textonly-btn.btn-turquoise.btn-large(to='/brokers') Brokers #[img.btn-icon(src='~@/assets/images/icons/large-arrow.svg')]

      //- Features
      article.info-section.features.black-cards
        carousel.features-list.black-cards__list(
          :perPageCustom='[[0, 1], [640, 2], [900, 3], [1150, 4]]',
          :autoplay='true',
          :paginationSize='30'
        )
          slide
            black-card(
              image='graphs/graph1.svg',
              title='Acciones',
              description='Invierte en millones de compañias utilizando todas las herramientas para trading y analizar la informacion para tu portafolio de inversión.'
            )
          slide
            black-card(
              image='graphs/graph2.svg',
              title='Opciones',
              description='Las opciones proveen de una alternativa estrategica para tu capital en donde podras invertir en el mercado de capitales.'
            )
          slide
            black-card(
              image='graphs/graph3.svg',
              title="ETF'S",
              description='Diversifique sus valores invirtiendo en un grupo de acciones con la misma conveniencia que negociar una sola acción.'
            )
          slide
            black-card(
              image='graphs/graph4.svg',
              title='Forex',
              description='Diferencia tu portafolio con el mercado mas líquido del mundo que te permitirá aumentar los rendimientos que puedas obtener.'
            )


</template>

<script>

  // Components
  import BlackCard from '@/components/common/BlackCard'
  import { Carousel, Slide } from 'vue-carousel'


  export default {
    name: 'home',
    components: {
      BlackCard,
      Carousel,
      Slide,
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
  @import '~@/assets/styles/base/_fonts';

  @import '~@/assets/styles/utils/_colors';
  @import '~@/assets/styles/utils/_mixins';

  @import '~@/assets/styles/components/_button';


  .hero {
    @include isFlex();
    min-height: 100vh;
    //background: url('~@/assets/images/hero/home.jpg') no-repeat center;
    //background-size: cover;
    position: relative;
  }
  .hero__video {
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
  }
  .hero__logo {
    display: block;
    z-index: 1;
    width: 105px;
  }
  .chevron-down {
    position: absolute;
    z-index: 1;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    transition: 0.2s ease-out all;
    display: inline-block;
    width: 46px;
    &:hover {
      transform: translateY(3px);
    }
  }

  // Internal nav
  .internal-nav {
    position: absolute;
    top: 30px;
    padding: 0 50px;
    z-index: 2;
    width: 100%;
  }
  .internal-nav__ul {
    @include isFlex(center, space-between);
  }
  .internal-nav__li {
    & + .internal-nav__li {
      margin-left: 50px;
    }
  }
  .internal-nav__li-logo {
    margin-right: auto;
  }
  .internal-nav__a {
    font-family: 'Soleil';
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    padding: 0 10px 5px 10px;
    border-bottom: 1px solid transparent;
    &:hover {
      border-color: white;
    }
  }

  // Mobile nav
  .menu__bars {
    @include isFlex(center, space-between, column);
    width: 50px;
    height: 40px;
    cursor: pointer;
    right: 15px;
    z-index: 3;
    position: absolute;
    top: 30px;
  }
  .menu__bar {
    width: 100%;
    height: 3px;
    background: white;
  }
  .mobile-nav__label {

  }
  .internal-nav__mobile {
    position: absolute;
    top: 0;
    padding: 0 50px;
    width: 100%;
    display: none;
    min-height: 100%;
  }
  .mobile-nav__checkbox {
    display: none;
    // &:checked ~ .mobile-nav {
    //   right: 0;
    // }
  }
  .mobile-nav {
    z-index: 3;
    width: 90%;
    background: $dark;
    padding: 40px;
    box-shadow: -15px 3px 25px 0 rgba(0, 0, 0, 0.16);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 100%;
    position: absolute;
    right: 0;
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

  // Section
  .info-section {
    @include isFlex();
    flex-wrap: nowrap;
    min-height: 100vh;
    position: relative;
  }

  .info-section__textonly {
    flex-direction: column;
  }

  // Guacamaya
  .info-section__guacamaya {
    .info-section__media {
      background: url('~@/assets/images/video-invierte.jpg') no-repeat center;
      background-size: cover;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $turquoise;
        opacity: 0.4;
        z-index: 1;
      }
    }
    .info-section__info {
      background: $turquoise;
      color: white;
    }
    .info-section__icon-img {
      margin-top: -65px;
      margin-right: -125px;
    }
  }

  // Tortuga
  .info-section__tortuga {
    .info-section__media {
      background: url('~@/assets/images/video-aprende.jpg') no-repeat center;
      background-size: cover;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $pumpkin-orange;
        opacity: 0.4;
        z-index: 1;
      }
    }
    .info-section__info {
      background: $pumpkin-orange;
      color: white;
    }
  }


  .info-section__media {
    flex: 1;
    align-self: stretch;
  }
  .info-section__info {
    @include isFlex(center, flex-start);
    flex: 1;
    align-self: stretch;
    position: relative;
    &.backwards {
     justify-content: flex-end;
      .info-section__content {
        padding-right: 195px;
        padding-left: auto;
      }

      text-align: right;
    }
  }
  .info-section__icon {
    @include isFlex();
    width: 250px;
    height: 250px;
    border-radius: 30px;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.16);
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 2;
    pointer-events: none;
  }
  .info-section__icon-img {
    display: block;
    max-width: 300px;
  }
  .info-section__content {
    min-width: 365px;
    font-weight: 400;
    font-family: 'Soleil';
    text-transform: uppercase;
    position: absolute;
    z-index: 2;
    padding-left: 195px;
  }
  .info-section__animal-sound {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1.8px;
  }
  .info-section__content-title {
    font-size: 36px;
    letter-spacing: 3.6px;
    margin-top: 11px;
  }
  .info-section__content-description {
    font-size: 18px;
    letter-spacing: 1.8px;
    color: rgba(white, 0.5);
    margin-top: 13px;
  }
  .info-section__content-button {
    margin-top: 31px;
  }


  // Info section text only
  .info-section__title {
    font-family: 'Soleil';
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1.25;
    letter-spacing: 2px;
  }
  .info-section__text {
    font-family: 'AvenirBook';
    text-align: center;
    margin-top: 82px;
    max-width: 1060px;
    letter-spacing: 1.8px;
  }
  .info-section__p {
    color: rgba($dark, 0.7);
    font-size: 18px;
    line-height: 1.44;
    & + .info-section__p {
      margin-top: 45px;
    }
  }
  .info-section__textonly-btn {
    margin-top: 100px;
  }

  // Features
  .features-list {
    width: 1366px;
    margin: 0 auto;
    // @include isFlex(center, space-between, row, nowrap);
  }

  /*
    Responsive
  */
  @media screen and(max-width: 1300px) {
    .features-list {
      width: 100vw;
    }
  }
  @media screen and (max-width: 800px) {
    .info-section {
      flex-direction: column;
      text-align: center;
    }
    .info-section__guacamaya {
      .info-section__icon-img {
        margin-top: -30px;
        margin-right: -100px;
      }
    }
    .info-section__info {
      justify-content: center;
      &.backwards {
        order: 2;
        text-align: center;
        justify-content: center;
        .info-section__content {
          padding: 0;
        }
      }
    }
    .info-section__content {
      padding: 0;
    }
    .info-section__content-top {
      position: absolute;
      top: -380px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .info-section__icon {
      width: 200px;
      height: 200px;
    }
    .info-section__icon-img {
      max-width: 230px;
    }
    .info-section__animal-sound {
      font-size: 16px;
    }
    .info-section__content-title {
      font-size: 32px;
    }
    .info-section__content-description {
      font-size: 12px;
    }

    // Quienes somos
    .info-section__textonly {
      padding: 0 30px;
    }
    .info-section__title {
      font-size: 18px;
    }
    .info-section__text {
      font-size: 12px;
    }
  }

  @media screen and(max-width: 768px) {
    .internal-nav {
      display: none;
    }
    .internal-nav__mobile {
      display: block;
    }
  }
</style>
