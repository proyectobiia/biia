<template lang="pug">
<div>
  <transition name="modal">
    <div v-if="isOpen">
      <div class="overlay" @click.self="isOpen = false;">
        <div class="modal">
          <form name="brokers-signup" @submit.prevent="onModalSubmit" data-netlify="true" data-netlify-honeypot="bot-field">
            <h1 class="modal__title">Ingresa tu email</h1>
            <input type="text" class="modal__input" name="email" v-model="email" /></br>
            <input type="hidden" name="form-name" value="brokers-signup" />
            <button type="submit" class="btn-turquoise clickable modal__submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </transition>

  <transition name="modal-success">
    <div v-if="isOpen2">
      <div class="overlay" @click.self="isOpen2 = false;">
        <div class="modal">
          <p class="modal__p">Gracias por registrarte</p></br>
          <p class="modal__p">Por favor, revisa tu correo.</p></br>
          <p class="modal__p">En seguida se abrirá una pestaña nueva.</p>
        </div>
      </div>
    </div>
  </transition>

  section.page
    //- Navbar
    navbar(bgColor='#00bfb5', position='absolute')

    //- Hero
    hero(
      animal='guacamaya.png',
      bg-color='rgba(0,191,181, 1.0)',
      bg-image='brokers.jpg',
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
              link='http://multibanklatam.com/account/live-account?ibName=333117650&company_id=6',
              @onClickModal='toggleModal'
            )
          slide
            black-card(
              image='brokers/pepperstone.png',
              title='Pepperstone',
              description='Opere con un bróker galardonado de Forex y CFDs.',
              link='http://trk.pepperstonepartners.com/aff_c?offer_id=345&aff_id=8440&_ga=2.72861079.566400822.1588012184-824571381.1587143961',
              @onClickModal='toggleModal' 
            )
          slide
            black-card(
              image='brokers/questrade.png',
              title="Questrade",
              description='There’s a new world of investing where the fees are low and you come first.',
              link='http://www.questrade.com/?refid=5e7ff4d9511fb',
              @onClickModal='toggleModal'
            )
          slide
            black-card(
              image='brokers/roboforex.png',
              title='Roboforex',
              description='Trade EURUSD, GBPUSD, USDJPY on competitive conditions.',
              link='https://my.roboforex.com/en/?a=ztaa',
              @onClickModal='toggleModal'
            )
</div>
</template>

<script>
// Components
import Navbar from "@/components/common/Nav";
import Hero from "@/components/common/Hero";
import BlackCard from "@/components/common/BlackCard";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";

export default {
  name: "home",
  components: {
    Navbar,
    Hero,
    BlackCard,
    Carousel,
    Slide
  },
  data: function() {
    return {
      isOpen: false,
      isOpen2: false,
      link: "",
      brokerTitle: "",
      email: ""
    };
  },
  methods: {
    toggleModal(link, title) {
      this.isOpen = !this.isOpen;
      this.link = link;
      this.brokerTitle= title;
    },
    encode(data){
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    onModalSubmit(e) {
      console.log(e.target);
      this.isOpen2 = true;
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "brokers-signup",
          "email": this.email,
          "brokerTitle": this.brokerTitle
        }),
        axiosConfig
      );
      //setTimeout(() => {
        //this.isOpen = false;
        //this.isOpen2 = false;
        //window.open(this.link, "_blank");
      //}, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
// Imports
@import "~@/assets/styles/base/_fonts";

@import "~@/assets/styles/utils/_colors";
@import "~@/assets/styles/utils/_mixins";

@import "~@/assets/styles/components/_button";

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

.modal {
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}

.modal__title {
  font-family: 'Soleil';
  font-size: 20px;
  text-transform: uppercase;
  line-height: 1.25;
  letter-spacing: 2px;
}

.modal__p {
  color: rgba($dark, 0.7);
  font-size: 18px;
  line-height: 1.44;
}

.modal__input {
  margin-top: 5%;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  width: 100%;
}

.modal__submit {
  margin-top: 5%;
}
</style>
