<template lang="pug">
    section.page
      //- vue-scroll-snap(:fullscreen='true')
      header.hero.item
        img.hero__logo(src='~@/assets/images/logo-color.svg')
        a(href='').chevron-down
          img(src='~@/assets/images/icons/chevron-down.svg')
      article.info-section.info-section__guacamaya.item
        .info-section__icon
          img.info-section__icon-img(src='~@/assets/images/animals/guacamaya.png')
        .info-section__media
        .info-section__text
          .info-section__content
            p.info-section__animal-sound Moo
            h3.info-section__title Invierte
            p.info-section__description
              | Reducimos tu spread hasta un
              br
              | 25% ¡Comieza Ya!
            button.info-section__button Saber más #[img.info-section__button-icon(src='~@/assets/images/icons/small-arrow.svg')]
        a(href='').chevron-down
          img(src='~@/assets/images/icons/chevron-down.svg')

      article.info-section.info-section__tortuga.item
        .info-section__icon
          img.info-section__icon-img(src='~@/assets/images/animals/tortuga.png')

        .info-section__text.backwards
          .info-section__content
            p.info-section__animal-sound Akk
            h3.info-section__title Aprende
            p.info-section__description
              | Comienza tu carrera
              br
              | como trader
            button.info-section__button Saber más #[img.info-section__button-icon(src='~@/assets/images/icons/small-arrow.svg')]

        .info-section__media
        a(href='').chevron-down
          img(src='~@/assets/images/icons/chevron-down.svg')



</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/utils/_colors';
  @import '~@/assets/styles/utils/_mixins';

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
    .info-section__text {
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
    .info-section__text {
      background: $pumpkin-orange;
      color: white;
    }
    .info-section__icon-img {
      // margin-left: -20px;
    }
  }


  .info-section__media {
    flex: 1;
    align-self: stretch;
  }
  .info-section__text {
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
    max-width: 350px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .info-section__animal-sound {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1.8px;
  }
  .info-section__title {
    font-size: 36px;
    letter-spacing: 3.6px;
    margin-top: 11px;
  }
  .info-section__description {
    font-size: 18px;
    letter-spacing: 1.8px;
    color: rgba(white, 0.5);
    margin-top: 13px;
  }
  .info-section__button {
    cursor: pointer;
    text-transform: uppercase;
    color: white;
    margin-top: 31px;
    padding: 10px 11px;
    background: rgba(white, 0.4);
    border-radius: 10px;
    font-size: 16px;
    letter-spacing: 1.6px;
    display: inline-block;
  }
  .info-section__button-icon {
    margin-left: 22px;
  }
</style>
