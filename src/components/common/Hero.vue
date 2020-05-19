<template lang="pug">
  header.hero#hero
    .hero__image(:style="{backgroundImage: `url(${getBgPath(bgImage)})`}", v-if='isMobile')
    .hero__overlay(:style="{backgroundColor: bgColor}")
    video.hero__video(v-if='!isMobile', autoplay, muted, loop)
      source(playsinline, webkit-playsinline, :src='getVideoPath(video)', type='video/mp4')
    .hero__content(:class='"hero__content--"+direction')
      .hero__animal(:class='"hero__animal--"+direction', data-aos="fade-right" data-aos-delay="500")
        img.hero__animal-img(:src="getImagePath(animal)", :style='animalStyle')
      .hero__info(:class='"hero__info--"+direction', data-aos="fade-down" data-aos-delay="500")
        p.hero__animalsound {{animalSound}}
        h2.hero__title {{title}}
        p.hero__description {{description}}
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
          marginRight: '',
        },
        firstVideoFrame: '#t=0.1',
        isMobile: false,
      }
    },
    created() {
      // Mobile detection
      this.detectIsMobile()
      window.addEventListener('resize', this.detectIsMobile)

      AOS.init({
        once: true,
      })

      // Update style of guacamaya
      if (this.animal === 'guacamaya.png') {
        this.animalStyle.marginTop = '-65px'
        this.animalStyle.marginRight = '-125px'
      }
    },
    destroyed() {
      window.removeEventListener('resize', this.detectIsMobile)
    },
    methods: {
      // Fn: Mobile detection
      detectIsMobile() {
        this.isMobile = window.innerWidth < 768 ? true : false
      },

      // Fn: Get path of the video
      getVideoPath(i) {
        return i ? require(`../../assets/videos/${i}`) + this.firstVideoFrame : ''
      },

      // Fn: Get path of background
      getBgPath(i) {
        return i ? require(`../../assets/images/hero/${i}`) : ''
      },

      // Fn: Get path of the animal
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
    position: relative;
    overflow: hidden;
  }
  .hero__image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .hero__video {
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
  }
  .hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: 2;
  }
  .hero__content {
    @include isFlex();
    position: relative;
    z-index: 3;
    transition: 0.2s ease-out all;
    margin-top: 100px;
  }
  .hero__animal {
    @include isFlex();
    width: 250px;
    height: 250px;
    border-radius: 30px;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.16);
    background: white;
  }
  .hero__animal--backwards {
    order: 2;
  }
  .hero__animal-img {
    display: block;
    max-width: 300px;
  }
  .hero__info {
    font-family: 'Soleil';
    color: white;
    max-width: 350px;
    flex: 1;
    z-index: 3;
    margin-left: 70px;
  }
  .hero__info--backwards {
    text-align: right;
    margin-left: 0;
    margin-right: 70px;
  }
  .hero__animalsound {
    font-size: 18px;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }
  .hero__title {
    font-size: 36px;
    letter-spacing: 3.6px;
    margin-top: 11px;
    text-transform: uppercase;
  }
  .hero__description {
    font-family: 'AvenirMedium';
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.8px;
    margin-top: 45px;
    line-height: 1.44;
  }

  // Responsive
  @media screen and (max-width: 768px) {
    .hero__content {
      display: block;
      text-align: center;
    }
    .hero__animal {
      margin: 0 auto;
      width: 200px;
      height: 200px;
    }
    .hero__animal-img {
      max-width: 230px;

    }
    .hero__info {
      margin-left: 0;
      margin-top: 50px;
      padding: 0 15px;
    }
    .hero__info--backwards {
      text-align: center;
      margin-right: 0;
    }
    .hero__animalsound {
      font-size: 16px;
    }
    .hero__title {
      font-size: 32px;
    }
    .hero__description {
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
    .hero__content {
      margin-top: 80px;
    }
  }
</style>
