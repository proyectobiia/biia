<template lang="pug">
  section.page
    //- Navbar
    navbar

    //- Hero
    hero(
      animal='guacamaya.png',
      bg-color='rgba(0,191,181, 1.0)',
      bg-image='brokers.jpg',
      animal-sound='Moo',
      title='Invierte',
      description='Es relacionado con el tiempo y las alteraciones de la actividad alrededor del día . En BIIA las alteraciones del mercado las puedes aprovechar en conjunto con los de los mejores brokers a nivel mundial.',
    )

    //- Features
    article.info-section.features.black-cards
      .features-list.black-cards__list
        black-card(
          image='brokers/multibank.svg',
          title='Multibank',
          description='Conecta a Latinoamérica con los mercados globales.'
        )
        black-card(
          image='brokers/pepperstone.svg',
          title='Pepperstone',
          description='Opere con un bróker galardonado de Forex y CFDs.'
        )
        black-card(
          image='brokers/questrade.svg',
          title="Questrade",
          description='There’s a new world of investing where the fees are low and you come first.'
        )
        black-card(
          image='brokers/roboforex.svg',
          title='Roboforex',
          description='Trade EURUSD, GBPUSD, USDJPY on competitive conditions.'
        )
</template>

<script>
  import Navbar from '@/components/common/Nav'
  import Hero from '@/components/common/Hero'
  import BlackCard from '@/components/common/BlackCard'

  export default {
    name: 'home',
    components: {
      Navbar,
      Hero,
      BlackCard,
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
    background: url('~@/assets/images/hero/home.jpg') no-repeat center;
    background-size: cover;
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

  // Section
  .info-section {
    @include isFlex();
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
    @include isFlex(center, space-between, row, nowrap);
  }
</style>
