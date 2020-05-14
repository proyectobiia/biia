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
      .section-subtitle Aprende de los mejores
      carousel.features-list.black-cards__list.learn-cards(
          :perPageCustom='[[0, 1], [720, 2]]',
          :autoplay='true',
          :paginationSize='30'
        )
        slide
          black-card(
            image='academies/Octopus.svg',
            title='Octopus',
            description='Enfocada al trading en Forex, fundada en 2016.',
            link='https://www.ofxincorporation.com'
          )
        slide
          black-card(
            image='academies/4xAcademy.svg',
            title='4xAcademy',
            description='Desarrolla tus habilidades con el apoyo de profesionales',
            link='https://www.4xacademy.lat'
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
    width: 720px;
    margin: 0 auto;
    margin-top: 110px;
  }

  /*
    Responsive
  */
  @media screen and(max-width: 768px) {
    .section-subtitle {
      font-size: 18px;
    }
    .features-list {
      margin-top: 70px;
    }
  }

  @media screen and(max-width: 720px) {
    .learn-cards {
      width: 100vw;
    }
  }
</style>
