<template lang="pug">
  section.page
    //- Navbar
    navbar(bgColor='#00bfb5', position='absolute')

    //- Hero
    hero(
      animal='guacamaya.png',
      bg-color='rgba(0,191,181, 1.0)',
      bg-image='brokers-simple.jpg',
      animal-sound='Moo',
      title='Invierte',
      description='Es relacionado con el tiempo y las alteraciones de la actividad alrededor del día . En BIIA las alteraciones del mercado las puedes aprovechar en conjunto con los de los mejores brokers a nivel mundial.',
      video='gana.mp4',
    )

    //- Features
    article.info-section.features.black-cards
      .section-subtitle Elige al broker con el que más te adaptes
      carousel.features-list.black-cards__list(
          :perPageCustom='[[0, 1], [640, 2], [900, 3], [1150, 4]]',
          :autoplay='true',
          :paginationSize='30'
        )
        slide
          black-card(
            image='brokers/multibank.png',
            title='Multibank',
            description='Conecta a Latinoamérica con los mercados globales.',
            link='http://multibanklatam.com/account/live-account?ibName=333117650&company_id=6'
          )
        slide
          black-card(
            image='brokers/pepperstone.png',
            title='Pepperstone',
            description='Opere con un bróker galardonado de Forex y CFDs.',
            link='http://trk.pepperstonepartners.com/aff_c?offer_id=345&aff_id=8440&_ga=2.72861079.566400822.1588012184-824571381.1587143961'
          )
        slide
          black-card(
            image='brokers/questrade.png',
            title="Questrade",
            description='There’s a new world of investing where the fees are low and you come first.',
            link='http://www.questrade.com/?refid=5e7ff4d9511fb'
          )
        slide
          black-card(
            image='brokers/roboforex.png',
            title='Roboforex',
            description='Trade EURUSD, GBPUSD, USDJPY on competitive conditions.',
            link='https://my.roboforex.com/en/?a=ztaa'
          )
</template>

<script>

  // Components
  import Navbar from '@/components/common/Nav'
  import Hero from '@/components/common/Hero'
  import BlackCard from '@/components/common/BlackCard'
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    name: 'home',
    components: {
      Navbar,
      Hero,
      BlackCard,
      Carousel,
      Slide,
    },
  }
</script>

<style lang="scss" scoped>

  // Imports
  @import '~@/assets/styles/base/_fonts';

  @import '~@/assets/styles/utils/_colors';
  @import '~@/assets/styles/utils/_mixins';

  @import '~@/assets/styles/components/_button';


  .hero {
    @include isFlex();
    min-height: 100vh;
    // background: url('~@/assets/images/hero/home.jpg') no-repeat center;
    // background-size: cover;
    position: relative;
  }
  .hero__logo {
    display: block;
    z-index: 1;
    width: 120px;
  }
  .chevron-down {
    position: absolute;
    z-index: 1;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }

  .section-subtitle {
    font-family: 'Soleil';
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 2.8px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s ease-out all;
  }

  // Section
  .info-section {
    @include isFlex();
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    padding: 30px;
    min-height: 700px;
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
    flex: 1;
    align-self: stretch;
    @include isFlex();
    &.backwards {
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
  }
  .info-section__icon-img {
    display: block;
    max-width: 300px;
  }
  .info-section__content {
    max-width: 365px;
    font-weight: 400;
    font-family: 'Soleil';
    text-transform: uppercase;
    position: relative;
    z-index: 2;
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
    margin-top: 110px;
  }

  /*
    Responsive
  */
  @media screen and(max-width: 1300px) {
    .features-list {
      width: 100vw;
    }
  }
  @media screen and(max-width: 768px) {
    .section-subtitle {
      font-size: 18px;
    }
    .features-list {
      margin-top: 70px;
    }
    .info-section {
      padding: 30px 15px;
    }
  }
</style>
