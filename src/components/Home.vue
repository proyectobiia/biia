<template lang="pug">
    section.page
      //- vue-scroll-snap(:fullscreen='true')
      header.hero.item
        img.hero__logo(src='~@/assets/images/logo-color.svg')
        a(href='').chevron-down
          img(src='~@/assets/images/icons/chevron-down.svg')

      //- Guacamaya
      article.info-section.info-section__guacamaya.item
        .info-section__icon
          img.info-section__icon-img(src='~@/assets/images/animals/guacamaya.png')
        .info-section__media
        .info-section__info
          .info-section__content
            p.info-section__animal-sound Moo
            h3.info-section__content-title Invierte
            p.info-section__content-description
              | Reducimos tu spread hasta un
              br
              | 25% ¡Comieza Ya!
            button.info-section__content-button.btn-whiteopacity Saber más #[img.info-section__button-icon.btn-icon(src='~@/assets/images/icons/small-arrow.svg')]
        a(href='').chevron-down
          img(src='~@/assets/images/icons/chevron-down.svg')

      //- Tortuga
      article.info-section.info-section__tortuga.item
        .info-section__icon
          img.info-section__icon-img(src='~@/assets/images/animals/tortuga.png')

        .info-section__info.backwards
          .info-section__content
            p.info-section__animal-sound Akk
            h3.info-section__content-title Aprende
            p.info-section__content-description
              | Comienza tu carrera
              br
              | como trader
            button.info-section__content-button.btn-whiteopacity Saber más #[img.info-section__button-icon.btn-icon(src='~@/assets/images/icons/small-arrow.svg')]

        .info-section__media
        a(href='').chevron-down
          img(src='~@/assets/images/icons/chevron-down.svg')

      //- ¿Quienes somos?
      article.info-section.info-section__textonly
        .info-section__title ¿Quiénes somos?
        .info-section__text
          .info-section__p Hemos generado alianzas estratégicas con los mejores brokers a nivel mundial, permitiéndonos reducir tu spread hasta un 55%.
          .info-section__p En BIIA Fomentamos el buen trading de la mano de las mejores academias que generan traders rentables, consistentes y contamos con brokers que tienen las mejores regulaciones, para que operes tu capital con la mayor confianza posible.
          .info-section__p ¡No importa si tu operación es ganadora o perdedora en tu broker, con nosotros, siempre ganas!
        button.info-section__textonly-btn.btn-turquoise.btn-large Brokers #[img.btn-icon(src='~@/assets/images/icons/large-arrow.svg')]


      //- Features
      article.info-section.features.black-cards
        .features-list.black-cards__list
          black-card(
            image='graph1.svg',
            title='Acciones',
            description='Invierte en millones de compañias utilizando todas las herramientas para trading y analizar la informacion para tu portafolio de inversión'
          )
          black-card(
            image='graph2.svg',
            title='Opciones',
            description='Las opciones proveen de una alternativa estrategica para tu capital en donde podras invertir en el mercado de capitaleS.'
          )
          black-card(
            image='graph3.svg',
            title="ETF'S",
            description='Diversifique sus valores invirtiendo en un grupo de acciones con la misma conveniencia que negociar una sola acción.'
          )
          black-card(
            image='graph4.svg',
            title='Forex',
            description='Diferencia tu portafolio con el mercado mas líquido del mundo que te permitirá aumentar los rendimientos que puedas obtener.'
            )


</template>

<script>
  import BlackCard from '@/components/common/BlackCard'

  export default {
    name: 'home',
    components: {
      BlackCard,
    },
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
