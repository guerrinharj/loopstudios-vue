export default {
    namespaced: true,
    state() {
        return {
            grid: [
                {
                    title: 'Deep Earth',
                    image: 'image-deep-earth.jpg'
                },
                {
                    title: 'Night Arcade',
                    image: 'image-night-arcade.jpg'
                },
                {
                    title: 'Soccer Team VR',
                    image: 'image-soccer-team.jpg'
                },
                {
                    title: 'The Grid',
                    image: 'image-grid.jpg'
                },
                {
                    title: 'From Up Above VR',
                    image: 'image-from-above.jpg'
                },
                {
                    title: 'Pocket Borealis',
                    image: 'image-pocket-borealis.jpg'

                },
                {
                    title: 'The Curiosity',
                    image: 'image-curiosity.jpg'

                },
                {
                    title: 'Make It Fisheye',
                    image: 'image-fisheye.jpg'
                }
            ]
        }
    },
    getters: {
        grid(state) {
            return state.grid
        },
    }
}