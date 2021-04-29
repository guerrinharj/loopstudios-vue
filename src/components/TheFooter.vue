<template>
    <main>
        <div class="container"> 
            <the-nav :isFooter=true :isMobile=false>
                <div class="menu">
                    <ul>
                        <li v-for="footeritem in menu" :key="footeritem">  {{footeritem}} </li>               
                    </ul>    
                </div>            
            </the-nav>

            <div class="social-copyright">

                <div class="social">
                    <ul>
                        <li v-for="socialitem in social" :key="socialitem"> 
                            <img alt="logo" :src="require('@/assets/images/' + socialitem + '')">
                        </li>                
                    </ul>    
                </div>

                <div class="copyright">
                    {{ copyright }}
                </div>

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
            logo() {
                return this.$store.getters['nav/logo']
            },
            social() {
                return this.$store.getters['nav/social']
            },
            copyright() {
                return this.$store.getters['nav/copyright']
            }
    }
    
}
</script>

<style scoped>

    main {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
    }

    ul {
        list-style-type: none;
        display: flex;
        padding: 0;
        margin: 0;
    }

    .menu li {
        margin-right: 1.5rem;
    }

    .social-copyright li {
        margin-left: 1.5rem;
    }

    .container {
        width: 70%;
        margin: 60px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .social-copyright {
        color: #ccc
    }

    .social ul { 
        justify-content: flex-end;
    }

    .social li {
        transition: 0.3s ease;
        cursor: pointer;
    }

    .social li:hover {
        opacity: 0.5;
        transition: 0.3s ease;
    }

    .social {
        margin-bottom: 2vh;
    }


    @media (max-width: 600px) {
        
        .container {
            justify-content: center;
            text-align: center;
            flex-wrap: wrap;
        }

        .menu ul {
            display: block;
        }

        .social ul {
            justify-content: center;
            padding: 0
        }

        .social li, .menu li {
            margin: 20px 15px;
            font-size: 1.5rem;
        }



    }



</style>