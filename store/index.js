export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    }
}

export const actions = {
    nuxtServerInit({dispatch}) {
        console.log('nuxtServerInit')
    },
    login({commit}) {
        commit('setToken', 'validToken')
    },
    clearToken({commit}) {
        commit('clearToken')
    }
}

export const getters = {
    hasToken(state) {
        return !!state.token
    }
}