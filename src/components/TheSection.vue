<template>
    <main> 
        <div class="section-box"> 

            <div class="image">
                 <img alt="section" :src="require('@/assets/images/desktop/' + image + '')">
            </div>
           
            <div class="dummy-child">
                <div class="info">
                    <h2> {{ title.leader }} </h2>
                    <h3> {{ bio }} </h3>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$store.getters['titles/titles']
        },
        image() {
            return this.$store.getters['titles/image']
        },
        bio() {
            return this.$store.getters['titles/bio']
        }
    }
    
}
</script>

<style scoped>

main {
    margin: 20vh 0
}

.section-box {
    position: relative;
    display: flex;
    margin: auto;

}

.info {
    width: 40%;
    position: absolute;
    background-color: white;
    font-weight: 300;
    bottom: 0;
    right: 0px;
    padding: 50px;
}

h2 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 300
}

h3 {
    color: rgb(0, 0, 0);
    opacity: 0.7;
    font-weight: 300
}

@media (max-width: 600px) {

    main {
        margin: 5vh 0;
    }
    
    .section-box {
        display: block;
    }

    .section-box img {
        width: 100%;
    }

    .info {
        position: relative;
    }

    .info {
        width: 70%;
        margin: auto;
        text-align: center;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.1rem;
    }

}

</style>