<template lang="pug">
  button.black-card(@click.prevent='openLink(link)', :class='{"no-link": link === undefined}')
    .black-card__top
      //- img.black-card__img(:src="'../assets/images/graphs/' + image")
      img.black-card__img(:src="getImagePath(image)")

    .black-card__content
      h4.black-card__title {{title}}
      p.black-card__description {{description}}


</template>

<script>

  export default {
    name: 'black-card',
    props: {
      image: String,
      title: String,
      description: String,
      link: String,
    },
    methods: {
      openLink(l) {
        if (l === undefined) return false
        window.open(l, '_blank')
      },

      getImagePath(i) {
        return i ? require(`../../assets/images/${i}`) : ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/base/_fonts';

  @import '~@/assets/styles/utils/_colors';
  @import '~@/assets/styles/utils/_mixins';

  @import '~@/assets/styles/components/_button';

  .black-card {
    display: block;
    width: 280px;
    transition: 0.2s ease-out all;
    cursor: pointer;

    // Carousel
    padding: 40px 0;
    margin: 0 auto;
    & + .black-card {
      margin-left: 64px;
    }
    &:hover {
      transform: translateY(4px);
    }
    &.no-link {
      cursor: default;
    }
  }
  .black-card__top {
    width: 150px;
    height: 150px;
    border-radius: 30px;
    box-shadow: 0 15px 6px 0 rgba(black, 0.16);
    background: $dark;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  .black-card__img {
    display: block;
    max-width: 100%;
    padding: 20px;
  }
  .black-card__content {
    width: 280px;
    height: 280px;
    border-radius: 40px;
    box-shadow: 0 20px 15px 0 rgba(black, 0.3);
    background-image: linear-gradient(to bottom, $dark, $slate-grey);
    padding: 35px 15px;
    padding-top: 97px;
    margin-top: -50px;
    color: white;
    text-align: center;
    z-index: 1;
    position: relative;
  }
  .black-card__title {
    font-family: 'Soleil';
    font-size: 18px;
    line-height: 1.28;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }
  .black-card__description {
    font-family: 'AvenirBook';
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 1.4px;
    margin-top: 20px;
  }

  // Responsive
  @media screen and (max-width: 768px) {
    .black-card {
      width: 210px;
    }
    .black-card__top {
      width: 100px;
      height: 100px;
    }
    .black-card__content {
      width: 210px;
      height: 210px;
    }
    .black-card__title {
      font-size: 14px;
    }
    .black-card__description {
      font-size: 12px;
      line-height: 1.33;
    }
  }


</style>
