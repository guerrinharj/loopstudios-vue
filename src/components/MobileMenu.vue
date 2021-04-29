<template>
    <main>

        <div class="mobile-wrapper">

            <img alt="close" src="../assets/images/icon-close.svg" @click="closeMenu">

        <the-nav :isMobile=true :isFooter=false>
           
                   
        
            


           
                
            <ul> 
                <li v-for="mobilemenuitems in menu" :key="mobilemenuitems"> {{ mobilemenuitems }} </li>     
            </ul>

        
        </the-nav>
        </div>
    </main>
</template>

<script>
export default {
    computed: {
        menu() {
            return this.$store.getters['nav/menu']
        },
        logo() {
            return this.$store.getters['nav/logo']
        },
    },
    methods: {
        closeMenu() {
             this.$store.dispatch('openerMenu')
        }
    }
    
}
</script>

<style scoped>

main {
    background-color: black;
    height: 100vh;
    width: 100%;
    z-index: 99;
    color: white;
}

.mobile-wrapper {
    width: 85%;
    height: 100vh;
    margin: auto;
    display: flex;
    align-items: center;;
    }

.nav-mobile {
    margin: 8vh auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

ul {
    margin: 70% 0;
    list-style-type: none;
    padding: 0;
}

li {
    font-size: 2rem;
    text-transform:uppercase;
    font-weight: 300;
    margin: 20px 0
}

img {
    position: absolute;
    top: 65px;
    right: 40px
}




</style>