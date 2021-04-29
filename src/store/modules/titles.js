export default {
    namespaced: true,
    state() {
        return {
            titles: {
                hero: 'Immersive experiences that deliver',
                leader: 'The Leader in Interactive VR',
                creations: 'Our Creations'
            },
            bio: 'Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.',
            image: 'image-interactive.jpg',
            box: 'See All'
        }
    },
    getters: {
        titles(state) {
            return state.titles
        },
        bio(state) {
            return state.bio
        },
        image(state) {
            return state.image
        },
        box(state) {
            return state.box
        }
    }
}