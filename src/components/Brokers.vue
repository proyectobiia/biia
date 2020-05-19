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
      .info-section__container
        .section-subtitle Elige al broker con el que más te adaptes
        carousel.features-list.black-cards__list(
            :perPageCustom='[[0, 1], [640, 2], [900, 3], [1250, 4]]',
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

  // Section
  .info-section {
    @include isFlex(center, center, column, nowrap);
    min-height: 100vh;
    position: relative;
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
  @media screen and (max-height: 700px) {
    .features-list {
      margin-top: 50px;
    }
  }

  @media screen and(max-width: 1300px) {
    .features-list {
      width: 100vw;
    }
  }
  @media screen and(max-width: 768px) {
    .features-list {
      margin-top: 70px;
    }
  }
</style>
