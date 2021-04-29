<template>
    <nav :class="{footerNav: isFooter, 'mobileNav': isMobile}">
        <span> 
            <the-logo> </the-logo> 
        </span>
        <slot>  </slot>
    </nav> 
</template>

<script>
export default {
    props: ['isFooter', 'isMobile']
}
</script>


<style>

nav {
    
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

}

.footerNav {
    display: flex;
    flex-wrap: wrap;
    width: 30%;
    align-items: center;
    justify-content: flex-start;
}

.footerNav span {
        margin-bottom: 2vh; 
}

    nav li, .footerNav li {
        margin-right: 1rem;
        cursor: pointer;
        transition: 0.3s ease;
    }

    nav li:hover, .footerNav li:hover {
        opacity: 0.5;
        transition: 0.3s ease;
    }


    @media (max-width: 600px) {
        .footerNav {
            justify-content: center;
        }

        .mobileNav {
                display: flex;
            flex-wrap: wrap;
            width: 80%;
        }



    } 

</style>