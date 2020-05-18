<template lang="pug">
  header.hero.item#hero(:style="{backgroundImage: `url(${getBgPath(bgImage)})`}")
    .hero-overlay(:style="{backgroundColor: bgColor}")
    video.hero__video(autoplay, muted, loop)
      source(playsinline='true', webkit-playsinline='true', :src='getVideoPath(video)+"#t=0.1"', type='video/mp4')
    .hero-content(:class='"hero-content--"+direction')
      .hero-animal(:class='"hero-animal--"+direction', data-aos="fade-right" data-aos-delay="500")
        img.hero-animal__img(:src="getImagePath(animal)", :style='animalStyle')
      .hero-info(:class='"hero-info--"+direction', data-aos="fade-down" data-aos-delay="500")
        p.hero-animalsound {{animalSound}}
        h2.hero-title {{title}}
        p.hero-description {{description}}
</template>

<script>

  import AOS from 'aos'
  import 'aos/dist/aos.css'

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
      direction: String,
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
      AOS.init({
        once: true,
      })

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
    @include isFlex();
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
  .hero-content {
    @include isFlex();
    position: relative;
    z-index: 2;
    transition: 0.2s ease-out all;
    margin-top: 100px;
  }
  .hero-animal {
    @include isFlex();
    width: 250px;
    height: 250px;
    border-radius: 30px;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.16);
    background: white;
  }
  .hero-animal--backwards {
    order: 2;
  }
  .hero-animal__img {
    display: block;
    max-width: 300px;
  }
  .hero-info {
    font-family: 'Soleil';
    color: white;
    max-width: 350px;
    flex: 1;
    z-index: 2;
    margin-left: 70px;
  }
  .hero-info--backwards {
    text-align: right;
    margin-left: 0;
    margin-right: 70px;
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

  // Responsive
  @media screen and (max-width: 768px) {
    .hero-content {
      display: block;
      text-align: center;
    }
    .hero-animal {
      margin: 0 auto;
      width: 200px;
      height: 200px;
    }
    .hero-animal__img {
      max-width: 230px;

    }
    .hero-info {
      margin-left: 0;
      margin-top: 50px;
      padding: 0 15px;
    }
    .hero-info--backwards {
      text-align: center;
      margin-right: 0;
    }
    .hero-animalsound {
      font-size: 16px;
    }
    .hero-title {
      font-size: 32px;
    }
    .hero-description {
      font-size: 14px;
      line-height: 1.43;
      letter-spacing: 1.4px;
      margin-top: 22px;
    }
  }

  // Responsive
  @media screen and (max-height: 700px) {
    .hero {
      height: 700px;
    }
    .hero-content {
      margin-top: 80px;
    }
  }
</style>
