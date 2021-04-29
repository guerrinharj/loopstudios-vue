<template>
    <main>

        <div class="title-box">
            <h2> {{ title.creations }} </h2>
            <div> {{ box }} </div>
        </div>

        <div class="gallery-grid deskgrid">
            <div v-for="griditem in grid" :key="griditem">
                <div class="the-item">
                    <img alt="grid" :src="require('@/assets/images/desktop/' + griditem.image + '')">
                    <div class="overlay">
                        {{ griditem.title }}
                    </div>
                </div>
            </div>
        </div>

        <div class="gallery-grid mobgrid">
            <div v-for="griditem in grid" :key="griditem">
                <div class="the-item">
                    <img alt="grid" :src="require('@/assets/images/mobile/' + griditem.image + '')">
                    <div class="overlay">
                        {{ griditem.title }}
                    </div>
                </div>
            </div>
        </div>


        <div class="box-mobile"> 
            <div> {{ box }} </div>
        </div>
        
    </main>
    
</template>

<script>
export default {
    computed: {
        title() {
            return this.$store.getters['titles/titles']
        },
        box() {
            return this.$store.getters['titles/box']
        },
        grid() {
            return this.$store.getters['grid/grid']
        }
    }
}
</script>




<style scoped>

.title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-transform: uppercase;
}

.title-box h2 {
    font-weight: 300;
    font-size: 2.5rem
}

.box-mobile {
    display: none;
}

.title-box div, .box-mobile div {
    border: solid 1px #000;
    padding: 20px;
    letter-spacing: 5px;
    cursor: pointer;
}

.title-box div {
      --initialTextColor: #272838;
      --slideTextColor: #FFF;

      --initialBgColor: #FFF;
      --slideBgColor: #272838;

      color: var(--initialTextColor);

      background-image: linear-gradient(90deg,
          var(--initialBgColor) 0%,
          var(--initialBgColor) 50%,
          var(--slideBgColor) 50%,
          var(--slideBgColor) 100%);
      background-size: 400%;
      transition: background-position .3s cubic-bezier(.47, .1, 1, .63),
        color .2s linear;
      transition-delay: 0.0s, 0.15s;
    }

    .title-box div:hover {
      color: var(--slideTextColor);
      cursor: pointer;
      background-position: -50% 100%;
    }

    .gallery-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 5px;
}

    .mobgrid {
        display: none;
    }

    .gallery-grid .the-item {
        position: relative;
        overflow: hidden;
    }

    .gallery-grid .the-item img {
        width: 100%;
        height: 100%;
         transition: 5s ease;
    }

      .gallery-grid .the-item:after {
            position: absolute;
            content:"";
            height:100%;
            width:100%;
            top:0;
            left:0;
            background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
      }

       .gallery-grid .the-item:hover img {
           transform: scale(1.3);
           transition: 5s ease;
       }

      .gallery-grid .the-item:hover .overlay {
            transform: translateY(-20%);
            transition: 0.2s ease;
      }

    .gallery-grid div .overlay {
        position: absolute;
        text-transform: uppercase;
        color: white;
        font-weight: 300;
        z-index: 5;
        bottom: 20px;
        font-size: 2rem;
        left: 10%;
        width: 50%;
          transition: 0.2s ease;
    }

@media (max-width: 600px) {

    .gallery-grid {
        grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 20px
    }

    .deskgrid {
        display: none;
    }

    .mobgrid {
        display: grid;
    }

    .gallery-grid .the-item {
         height: 15vh
    }

    gallery-grid .the-item img {
        height: 100%;
        width: 100%
    }

    .title-box  {
        justify-content: center;
    }

    .title-box div {
        display: none;
    }

    .box-mobile {
        display: block;   
    }

    .box-mobile div {
        width: 40%;
        margin: 5vh auto;
        text-align: center;
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 500
    }

     .gallery-grid div .overlay {
         width: 100%
     }

}
    

</style>