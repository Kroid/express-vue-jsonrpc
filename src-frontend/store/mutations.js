export default {
    ADD_ITEM: (state, data ) => {
        state.items.push({
            id: data.id,
            value: data.result
        })

    },

    DELETE_ITEM: (state, id) => {
        state.items = state.items.filter(item => item.id !== id );
    },

    SUCCESS_REGISTRATION: (state, data) => {
        state.successRegistration = true;
    },

    SET_AUTH_USER: (state, data) => {
        state.authUser = {email: data.user.email, name: data.user.name};
    },

    SET_DEFAULT_USER: (state) => {
        state.authUser = {email: 'mail@mail.com', name: 'Вася Иванов Петрович'};
    }
}
