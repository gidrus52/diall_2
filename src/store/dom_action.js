export default {
    state: {
        rigntMenu: false
    },
    getters: {
        right_menu: state => state.rigntMenu
    },
    mutations: {
        SET_RIGHT_MENU: (state, data) => {

            state.rigntMenu = data

        }
    },
    actions: {
        right_menu_action: ({commit, dispatch}, data) => {
            commit('SET_RIGHT_MENU', data)
        }
    }

}