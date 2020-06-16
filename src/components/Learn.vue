<template lang="pug">
  section.page
    //- Navbar
    navbar(bgColor='#f88920', position='absolute')

    //- Hero
    hero(
      animal='tortuga.png',
      bg-color='rgba(248, 137, 32, 1)',
      bg-image='learn.jpg',
      animal-sound='Tortuga',
      title='Aprende',
      description='Es la representación de la experiencia y el conocimiento, En BIIA te brindamos el conocimiento y experiencia de las mejores academias de trading online.',
      video='aprende.mp4',
      direction='backwards'
    )

    //- Features
    article.info-section.features.black-cards
      .info-section__container
        .section-subtitle Aprende de los mejores
        carousel.features-list.black-cards__list.learn-cards(
            :perPageCustom='[[0, 1], [720, 2]]',
            :autoplay='true',
            :paginationSize='30'
          )
          slide
            black-card(
              image='academies/Octopus.png',
              title='Octopus',
              description='Enfocada al trading en Forex, fundada en 2016.',
              link='https://www.ofxincorporation.com',
              @onClickModal='openLink'
            )
          slide
            black-card(
              image='academies/Bullground.png',
              title='Bullground',
              description='La plataforma que está revolucionando la educación financiera y de negocios.',
              link='https://bullground.mx',
              @onClickModal='openLink'
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
    methods: {
      openLink(link){
        window.open(link, "_blank");
      }
    }
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
    width: 720px;
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
  @media screen and(max-width: 768px) {
    .features-list {
      margin-top: 70px;
    }
  }

  @media screen and(max-width: 720px) {
    .learn-cards {
      width: 100%;
    }
  }
</style>
