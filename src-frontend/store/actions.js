import {
    addItem,
    registerUser,
    authUser
} from '../api'

export default {
    ADD_ITEM: ({ commit, state }, { value }) => {
        return addItem(value)
            .then(response => commit('ADD_ITEM', response.data))
            .catch(function (error) {
                console.log(error);
            });

    },

    REGISTER_USER: ({ commit, state }, data ) => {
        return registerUser(data)
            .then(response => commit('SUCCESS_REGISTRATION'))
            .catch((error) => {
                commit('SUCCESS_REGISTRATION')
            });

    },

    AUTH_USER: ({ commit, state }, data ) => {
        return authUser(data)
            .then(response => commit('SET_AUTH_USER', response.data))
            .catch((error) => {
                console.log(error)
                commit('SET_DEFAULT_USER')
            });

    }
}