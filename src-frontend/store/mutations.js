export default {
    ADD_ITEM: (state, data ) => {
        state.items.push({
            id: data.id,
            value: data.result
        })

    },

    DELETE_ITEM: (state, id) => {
        state.items = state.items.filter(item => item.id !== id );
    }
}
