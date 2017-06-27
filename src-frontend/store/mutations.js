import Vue from 'vue'

export default {
    ADD_ITEM: (state, { value }) => {
        state.items.push({
            id: Math.random(),
            value: value
        })

    },

    DELETE_ITEM: (state, id) => {
        state.items = state.items.filter(item => item.id !== id );
    }
}
