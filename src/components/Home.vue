<template lang="pug">
    section.page

      transition(name='slidedown')
        button(@click='moveUp', v-if='!inMove && showChevron', aria-label='Button scroll to section').btn__scrollto.clickable
          svg.clickable.btn__scrollto-icon(width='48' height='23' viewBox='0 0 48 23' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M24 22L1 1' :stroke='chevronStyle')
            path(d='M24 22L47 1' :stroke='chevronStyle')

      header.hero.fullpage#hero
        .hero__image(v-if='isMobile')
        video.hero__video(autoplay, muted, loop, v-if='videoIsLoaded && !isMobile')
          source(:src='heroVideo', type='video/mp4')

        router-link.hero__logo-link(to='/')
          img.hero__logo(src='~@/assets/images/logo-color.svg', title='BIIA', alt='BIIA')

      //- ¿Quienes somos?
      article.info-section.info-section__textonly.fullpage#quienes-somos
        .info-section__title ¿Quiénes somos?
        .info-section__text
          .info-section__p Hemos generado alianzas estratégicas con los mejores brokers a nivel mundial, permitiéndonos reducir tu spread hasta un 55%.
          .info-section__p En BIIA Fomentamos el buen trading de la mano de las mejores academias que generan traders rentables, consistentes y contamos con brokers que tienen las mejores regulaciones, para que operes tu capital con la mayor confianza posible.
          .info-section__p ¡No importa si tu operación es ganadora o perdedora en tu broker, con nosotros, siempre ganas!
        router-link.info-section__textonly-btn.btn-turquoise.btn-large.clickable(to='/brokers')
          span Brokers
          img.btn-icon(src='~@/assets/images/icons/large-arrow.svg', alt='large-arrow')

      //- Guacamaya
      article.info-section.info-section__guacamaya.no-padding.fullpage#brokers
        //- Internal nav
        internal-nav(@scrollToFromNav='scrollToFromNav')

        .info-section__icon.info-section__icon-guacamaya
        .info-section__media(data-aos="fade-right" data-aos-delay="200")
        .info-section__info
          .info-section__content(data-aos="fade-down" data-aos-delay="300")
            .info-section__content-top
              p.info-section__animal-sound Moo
              h3.info-section__content-title Invierte
            p.info-section__content-description
              | Reducimos tu spread hasta un
              br
              | 55% ¡Comieza Ya!
            router-link.info-section__content-button.btn-whiteopacity.clickable(to='/brokers')
              span Saber más
              img.info-section__button-icon.btn-icon(src='~@/assets/images/icons/small-arrow.svg', alt='small-arrow')

      //- Tortuga
      article.info-section.info-section__tortuga.no-padding.fullpage#aprende
        .info-section__icon.info-section__icon-tortuga

        .info-section__info.backwards
          .info-section__content(data-aos="fade-down" data-aos-delay="300")
            .info-section__content-top
              p.info-section__animal-sound Akk
              h3.info-section__content-title Aprende
            p.info-section__content-description
              | Comienza tu carrera
              br
              | como trader
            router-link.info-section__content-button.btn-whiteopacity.clickable(to='/aprende')
              span Saber más
              img.info-section__button-icon.btn-icon(src='~@/assets/images/icons/small-arrow.svg', alt='small-arrow')

        .info-section__media(data-aos="fade-left" data-aos-delay="200")

      //- Features
      article.info-section.features.black-cards.fullpage#features
        carousel.features-list.black-cards__list(
          :perPageCustom='[[0, 1], [640, 2], [900, 3], [1250, 4]]',
          :autoplay='true',
          :paginationSize='30'
        )
          slide
            black-card(
              image='graphs/graph1.png',
              title='Acciones',
              description='Invierte en millones de compañias utilizando todas las herramientas para trading y analizar la informacion para tu portafolio de inversión.',
              page='home',
            )
          slide
            black-card(
              image='graphs/graph2.png',
              title='Opciones',
              description='Las opciones proveen de una alternativa estrategica para tu capital en donde podras invertir en el mercado de capitales.',
              page='home',
            )
          slide
            black-card(
              image='graphs/graph3.png',
              title="ETF'S",
              description='Diversifique sus valores invirtiendo en un grupo de acciones con la misma conveniencia que negociar una sola acción.',
              page='home',
            )
          slide
            black-card(
              image='graphs/graph4.png',
              title='Forex',
              description='Diferencia tu portafolio con el mercado mas líquido del mundo que te permitirá aumentar los rendimientos que puedas obtener.',
              page='home',
            )


</template>

<script>

  // Dependencies
  import AOS from 'aos'
  import 'aos/dist/aos.css'
  import { Carousel, Slide } from 'vue-carousel'
  import smoothscroll from 'smoothscroll-polyfill'

  // Components
  import InternalNav from '@/components/common/InternalNav'
  import BlackCard from '@/components/common/BlackCard'

  // Assets
  import video from '@/assets/videos/home.mp4'

  // Animals
  import guacamaya from '@/assets/images/animals/guacamaya.png'
  import tortuga from '@/assets/images/animals/tortuga.png'


  export default {
    name: 'home',
    components: {
      BlackCard,
      InternalNav,
      Carousel,
      Slide,
    },
    data() {
      return {
        mobileMenuOpen: false,
        isMenuFixed: false,
        videoIsLoaded: false,
        heroVideo: null,
        firstVideoFrame: '#t=0.1',
        isMobile: false,
        sections: [],
        inMove: false,
        chevronStyle: 'white',
        showChevron: false,
        activeSection: 0,
        offsets: [],
        touchStartY: 0,
        activeAnimal: guacamaya,
        activeAnimalName: 'guacamaya',
        animalLoaded: true,
        scrollTimer: false,
        isWheeling: false,
        currentHeight: 0,
      }
    },
    mounted() {

      // Set the height  to the sections
      this.calculateSectionHeights()

      // Activate the smoothscroll crossbrowsing
      smoothscroll.polyfill()

      // Calculate the section offsets for the scrolling
      this.calculateSectionOffsets()

      // Adding events
      window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM) // Mozilla Firefox
      window.addEventListener("wheel", this.handleMouseWheel, {
        passive: false
      }) // Other browsers

      window.addEventListener("touchstart", this.touchStart, { passive: false }) // mobile devices
      window.addEventListener("touchmove", this.touchMove, { passive: false }) // mobile devices

      // Mobile detection
      this.detectIsMobile()
      window.addEventListener('resize', this.onResize)

      // Animations
      AOS.init({
        once: false,
        mirror: true,
      })

      // Load video
      this.loadVideo()
    },
    destroyed() {
      window.removeEventListener("wheel", this.handleMouseWheel, {
        passive: false
      }) // Other browsers
      window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM) // Mozilla Firefox

      window.removeEventListener("touchstart", this.touchStart) // mobile devices
      window.removeEventListener("touchmove", this.touchMove) // mobile devices
      window.removeEventListener('resize', this.onResize)
    },

    methods: {
      // Function: On Resize
      onResize() {
        if (this.currentHeight !== window.innerHeight) {
          console.log('different height')
          this.calculateSectionHeights()
        }
        this.detectIsMobile()
      },

      // Function: Calculate section heights
      calculateSectionHeights() {
        let sections = document.querySelectorAll('.fullpage')
        let length = sections.length
        this.sections = sections

        for (let i = 0; i < length - 1; i++) {
          sections[i].style.height = window.innerHeight + 'px'
        }

        this.currentHeight = window.innerHeight
      },

      // Function: Mobile detection
      detectIsMobile() {
        this.isMobile = window.innerWidth < 768 ? true : false
      },

      // Function: Load video
      loadVideo() {
        this.$nextTick(() => {
          this.heroVideo = video + this.firstVideoFrame
          this.videoIsLoaded = true
        })
      },

      // Function: Calculate section offsets
      calculateSectionOffsets() {
        let sections = document.querySelectorAll('.fullpage')
        let length = sections.length
        this.sections = sections

        for (let i = 0; i < length; i++) {
          let sectionOffset = sections[i].offsetTop
          this.offsets.push(sectionOffset)
        }

        this.getIndexOfSectionOnLoad()
      },

      handleMouseWheel(e) {
        e.preventDefault()

        clearInterval(this.scrollTimer)

        this.scrollTimer = setTimeout(() => {
          this.isWheeling = false
        }, 100)

        if (!this.isWheeling) {
          if (e.deltaY > 0 && !this.inMove) {
            this.moveUp()
            this.isWheeling = true
          } else if (e.deltaY < 0 && !this.inMove) {
            this.moveDown()
            this.isWheeling = true
          }
        }

        return false
      },

      handleMouseWheelDOM(e) {
        if (e.detail > 0 && !this.inMove) {
          this.moveUp()
        } else if (e.detail < 0 && !this.inMove) {
          this.moveDown()
        }

        return false
      },

      swipeUp() {
        if (!this.isMobile) return false
        this.moveUp()
      },

      swipeDown() {
        if (!this.isMobile) return false
        this.moveDown()
      },

      moveDown() {
        this.inMove = true
        this.activeSection--

        // if (this.activeSection < 0) this.activeSection = this.offsets.length - 1  --- loop

        this.scrollToSection(this.activeSection, true, 'down')
      },

      moveUp() {
        this.inMove = true
        this.activeSection++

        // if (this.activeSection > this.offsets.length - 1) this.activeSection = 0 --- loop

        this.scrollToSection(this.activeSection, true, 'up')
      },

      getIndexOfSectionOnLoad() {
        setTimeout(() => {
          const wScrollY = window.scrollY

          let f = this.offsets.findIndex(o => {
            return o == wScrollY
          })

          if (f === undefined || f < 0) {
            const lastOffset = this.offsets[this.offsets.length - 1]
            const prevLastOffset = this.offsets[this.offsets.length - 2]

            if (wScrollY > prevLastOffset && wScrollY < lastOffset) {
              f = this.offsets.indexOf(this.offsets[this.offsets.length - 1])
            }
          }

          const isFooter = Object.keys(this.sections).findIndex(s => {
            return this.sections[s].id == 'footer'
          })

          this.showChevron = isFooter === f ? false : true

          this.activeSection = f
        }, 100);

      },

      // Fn: Scroll to section from internal nav
      scrollToFromNav(sectionId) {

        let f = Object.keys(this.sections).findIndex(s => {
          return this.sections[s].id == sectionId
        })

        this.scrollToSection(f, true, this.activeSection > f ? 'down' : 'up')
      },

      // Fn: Scroll to some section
      scrollToSection(id, force = false, type = 'down') {
        if (this.inMove && !force) return false

        if (document.querySelectorAll('.fullpage')[id] !== undefined) {

          this.activeSection = id
          this.inMove = true
          const sectionId = document.querySelectorAll('.fullpage')[id].id

          this.chevronStyle = (sectionId === 'quienes-somos' || sectionId === 'features') ? 'black' : 'white'
          this.showChevron = sectionId !== 'footer' ? true : false

          document.querySelectorAll('.fullpage')[id].scrollIntoView({ behavior: 'smooth' })

          this.animalLoaded = false

          setTimeout(() => {
            if (sectionId === 'brokers') {
              this.activeAnimal = guacamaya
              this.activeAnimalName = 'guacamaya'
            } else if (sectionId === 'aprende') {
              this.activeAnimal = tortuga
              this.activeAnimalName = 'tortuga'
            } else {
              this.activeAnimal = ''
              this.activeAnimalName = ''
            }

            this.animalLoaded = true
          }, 200)

          setTimeout(() => {
            this.inMove = false
          }, 1000)
        } else {
          if (type === 'down') {
            this.activeSection++
          } else {
            this.activeSection--
          }

          setTimeout(() => {
            this.inMove = false
          }, 400)
        }


      },

      touchStart(e) {
        console.log(e)
        if (e.target.className.indexOf('clickable') === -1) {
          this.touchStartY = e.touches[0].clientY
          e.preventDefault()
        }
      },

      touchMove(e) {
        if (this.inMove) return false
        e.preventDefault()

        const currentY = e.touches[0].clientY

        if (this.touchStartY < currentY) {
          this.moveDown()
        } else {
          this.moveUp()
        }

        this.touchStartY = 0
        return false
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/base/_fonts';

  @import '~@/assets/styles/utils/_colors';
  @import '~@/assets/styles/utils/_mixins';

  @import '~@/assets/styles/components/_button';

  .none {
    display: none !important;
  }
  .hero {
    @include isFlex();
    height: 100vh;
    position: relative;
    background: #03030d;
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $dark;
      opacity: 0.4;
      z-index: 1;
    }
  }
  .hero__image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background: url('~@/assets/images/hero/home.jpg') no-repeat center;
    background-size: cover;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .hero__video {
    position: absolute;
    min-height: 100%;
    min-width: 100%;
  }
  .hero__logo-link {
    z-index: 1;
  }
  .hero__logo {
    display: block;
    width: 105px;
  }
  .chevron-down {
    position: absolute;
    z-index: 1;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    transition: 0.2s ease-out all;
    display: inline-block;
    width: 46px;
    &:hover {
      transform: translateY(3px);
    }
  }
  .btn__scrollto {
    position: fixed;
    z-index: 3;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    transition: 0.2s ease-out all;
    display: block;
    width: 60px;
    cursor: pointer;
    &:hover {
      transform: translateY(3px);
    }
  }
  .btn__scrollto-icon {
   opacity: 0.5;
  }

  // Slide animation
  .slidedown-enter-active,
  .slidedown-leave-active {
    transition: transform 0.2s ease-out;
  }

  .slidedown-enter,
  .slidedown-leave-to {
    transform: translateY(-100%);
    transition: all 0.2 ease-out 0s
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  /* .btn__scrollto-icon {
    &.white {
      stroke: white;
    }
    &.dark {
      stroke: black;
    }
  } */

  // Section
  .info-section {
    @include isFlex();
    flex-wrap: nowrap;
    height: 100vh;
    position: relative;
    padding: 30px;
    overflow: hidden;
    &.no-padding {
      padding: 0;
    }
  }

  .info-section__textonly {
    background: white;
    flex-direction: column;
  }

  // Guacamaya
  .info-section__guacamaya {
    background: $turquoise;
    .info-section__media {
      background: url('~@/assets/images/video-frames/video-invierte-2.png') no-repeat center;
      background-size: cover;
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
  }

  // Tortuga
  .info-section__tortuga {
    background: $pumpkin-orange;
    .info-section__media {
      background: url('~@/assets/images/video-frames/video-aprende-2.png') no-repeat center;
      background-size: cover;
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
    @include isFlex(center, flex-start);
    flex: 1;
    align-self: stretch;
    &.backwards {
     justify-content: flex-end;
      .info-section__content {
        padding-right: 195px;
        padding-left: auto;
      }
      text-align: right;
    }
  }
  .info-section__icon {
    @include isFlex();
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 300px auto;
    background-attachment: fixed;
    transition: 0.2s ease-out all;
  }
  .info-section__icon-img {
    display: block;
    max-width: 300px;
  }
  .info-section__icon-guacamaya {
    background-image: url('~@/assets/images/animals/guacamaya-square.png');

  }
  .info-section__icon-tortuga {
    background-image: url('~@/assets/images/animals/tortuga-square.png');
  }

  .info-section__content {
    min-width: 365px;
    font-weight: 400;
    font-family: 'Soleil';
    text-transform: uppercase;
    position: absolute;
    z-index: 2;
    padding-left: 195px;
  }
  .info-section__content-top {
    transition: 0.2s ease-out all;
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
    font-family: 'Soleil';
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
  .features {
    background: white;
    padding: 30px 0;
  }
  .features-list {
    width: 1366px;
    margin: 0 auto;
  }

  /*
    Responsive
  */


  // Height
  @media screen and (max-height: 700px) {
    .hero-content {
      margin-top: 80px;
      height: 700px;
    }
  }

  // Width
  @media screen and(max-width: 1300px) {
    .features-list {
      width: 100vw;
    }
  }
  @media screen and (max-width: 800px) {
    .info-section {
      flex-direction: column;
      text-align: center;
    }
    /* .info-section__guacamaya {
      .info-section__icon-img {
        margin-top: -30px;
        margin-right: -100px;
      }
    } */
    .info-section__info {
      justify-content: center;
      &.backwards {
        order: 2;
        text-align: center;
        justify-content: center;
        .info-section__content {
          padding: 0;
        }
      }
    }
    .info-section__content {
      padding: 0;
    }
    .info-section__content-top {
      position: absolute;
      top: -380px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .info-section__icon {
     /*  width: 200px;
      height: 200px; */
      background-size: 240px auto;
      background-attachment: unset;
    }
    /* .info-section__icon-img {
      max-width: 230px;
    } */
    .info-section__animal-sound {
      font-size: 16px;
    }
    .info-section__content-title {
      font-size: 32px;
    }
    .info-section__content-description {
      font-size: 12px;
    }

    // Quienes somos
    .info-section__textonly {
      padding: 0 30px;
    }
    .info-section__title {
      font-size: 18px;
    }

  }

  @media screen and(max-width: 768px) {
    .info-section {
      padding: 30px 15px;
    }
    .features {
      padding: 30px 0;
    }
    .info-section__text {
      margin-top: 40px;
    }
    .info-section__p {
      font-size: 12px;
    }
    .info-section__textonly-btn {
      margin-top: 50px;
    }
    .btn__scrollto-icon {
      width: 30px;
    }
  }

  @media screen and(max-width: 480px) and (max-height: 700px) {
    .info-section__content-top {
      top: -320px;
    }

  }
  @media screen and(max-width: 480px) {
    .btn__scrollto {
      bottom: 10px;
    }
  }
  @media screen and(max-width: 320px) {
    .info-section__p {
      & + .info-section__p {
        margin-top: 20px;
      }
    }
  }
</style>
