<template lang="pug">
  header.hero.item#hero(:style="{backgroundImage: `url(${getBgPath(bgImage)})`}")
    .hero-overlay(:style="{backgroundColor: bgColor}")
    video.hero__video(v-bind:poster="getBgPath(bgImage)", autoplay, muted, loop)
      source(:src="getVideoPath(video)", type='video/mp4')
    .hero-animal
      img.hero-animal__img(:src="getImagePath(animal)", :style='animalStyle')
      .hero-content
        p.hero-animalsound {{animalSound}}
        h2.hero-title {{title}}
        p.hero-description {{description}}
</template>

<script>

  export default {
    name: 'hero',
    props: {
      animal: String,
      bgColor: String,
      bgImage: String,
      animalSound: String,
      title: String,
      description: String,
      video: String,
    },
    data() {
      return {
        animalStyle: {
          marginTop: '',
          marginRight: ''
        }
      }
    },
    created() {
      if (this.animal === 'guacamaya.png') {
        this.animalStyle.marginTop = '-65px'
        this.animalStyle.marginRight = '-125px'
      }
    },
    methods: {
      getVideoPath(i) {
        return i ? require(`../../assets/videos/${i}`) : ''
      },

      getBgPath(i) {
        return i ? require(`../../assets/images/hero/${i}`) : ''
      },

      getImagePath(i) {
        return i ? require(`../../assets/images/animals/${i}`) : ''
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

  .hero {
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    overflow: hidden;
  }
  .hero__video {
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
  }
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: 1;
  }
  .hero-animal {
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
  .hero-animal__img {
    display: block;
    max-width: 300px;
  }
  .hero-content {
    font-family: 'Soleil';
    color: white;
    width: 350px;

    // Variable
    position: absolute;
    left: 330px;
  }
  .hero-animalsound {
    font-size: 18px;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }
  .hero-title {
    font-size: 36px;
    letter-spacing: 3.6px;
    margin-top: 11px;
    text-transform: uppercase;
  }
  .hero-description {
    font-family: 'AvenirMedium';
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.8px;
    margin-top: 45px;
    line-height: 1.44;
  }
</style>
