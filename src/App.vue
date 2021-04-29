<template>


  <transition>
    <div class="mobile-menu" :class="{visible: isMobile}">
      <mobile-menu> </mobile-menu>
    </div>
   </transition>   
 

    

<article>
    <the-header> </the-header>

      <div class="container">
        <the-section> </the-section>
        <the-grid> </the-grid>
      </div>

    <the-footer> </the-footer>
  </article>

</template>






<script>

import MobileMenu from './components/MobileMenu.vue'
import TheHeader from './components/TheHeader.vue';
import TheSection from './components/TheSection.vue';
import TheGrid from './components/TheGrid.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    MobileMenu,
    TheHeader,
    TheSection,
    TheGrid,
    TheFooter
  },

  computed: {
         isMobile() {
            return this.$store.getters.mobile
        }
  }
}

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');


  body {
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    width: 100%;
  }

  .container {
    width: 60%;
    margin: 20vh auto;

  }


    .mobile-menu {
      transform: translateY(-100%);
      transition: 0.5s ease;
      position: fixed;
      width: 100vw;
      overflow: hidden;
      z-index: 99;
    }

    .visible {
      transform: translateY(0%);
      transition: 0.5s ease;
    }



  

  @media (max-width: 600px) {
    
    .container {
      width: 90%;
      margin: auto;
    }



  }



</style>
