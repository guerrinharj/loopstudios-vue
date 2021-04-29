<template>

    <main>

        <div class="container-header">

            <the-nav :isFooter=false :isMobile=false> 
                <div class="menu">
                    <ul> 
                        <li v-for="menuitems in menu" :key="menuitems"> 
                            {{ menuitems }} 
                        </li>     
                    </ul>
                    <div class="menu-burger" @click="openMenu"> 
                        <img src="../assets/images/icon-hamburger.svg">
                    </div>
                </div>
             </the-nav>

            <div class="text">
                <div> {{ title.hero }} </div>
            </div>
           

        </div>
    </main>
</template>

<script>



export default {


    computed: {
        menu() {
            return this.$store.getters['nav/menu']
        },
        title() {
             return this.$store.getters['titles/titles']
        }
    },
    methods: {
        openMenu(){
            this.$store.dispatch('openerMenu')
        }
    }
    
}
</script>

<style scoped>

    main {
        background-image: url('../assets/images/desktop/image-hero.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1rem;
        margin: auto;
        padding: 40px 10px;
        
    }

    .container-header {
        width: 80%;
        margin: 0 
    }



    .menu ul {
        display: flex;
        list-style-type: none;
    }


    .text {
        display: flex;
        align-items: center; 
        margin: 14vh 0;
    }

    .text div {
      
        text-transform: uppercase;
        font-weight: 300;
        font-size: 4rem;
        width: 40%;
        border: solid 2px #ccc;
        padding: 50px;
    }


    .menu-burger {
        display: none;
    }


@media (max-width: 600px) {

    main {
        height: 100vh;
        padding: 0px;
        align-items: flex-start
    }

    .container-header {
        margin: 8vh;
        width: 90%
    }

    .menu ul {
        display: none;
    }

    .menu-burger {
        display: block
    }

    .text {
        margin: 20vh 0 ;
    }

    .text div {
        width: 100%;
        margin: auto;
        font-size: 3rem;

    }



}




</style>