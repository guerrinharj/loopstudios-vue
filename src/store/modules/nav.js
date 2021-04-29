export default {
    namespaced: true,
    state() {
        return {
            logo: 'logo.svg',
            menu: ['About', 'Careers', 'Events', 'Products', 'Support'],
            social: ['icon-instagram.svg', 'icon-facebook.svg', 'icon-pinterest.svg', 'icon-twitter.svg'],
            copyright: '2021 Loopstudios. All rights reserved.'
        }
    },
    getters: {
        logo(state) {
            return state.logo
        },
        menu(state) {
            return state.menu
        },
        social(state) {
            return state.social
        },
        copyright(state) {
            return state.copyright
        }
        
    }
}