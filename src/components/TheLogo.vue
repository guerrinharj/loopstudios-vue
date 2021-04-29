<template>
    <div class="logo">
          <img alt="logo" :src="require('@/assets/images/' + logo + '')">
        </div>
</template>

<script>
export default {
    computed: {
        logo() {
            return this.$store.getters['nav/logo']
        },
    }
    
}
</script>

<style scoped>

</style>