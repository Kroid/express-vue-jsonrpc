import {
    addItem
} from '../api'

export default {
    ADD_ITEM: ({ commit, state }, { value }) => {
        return addItem(value)
            .then(response => commit('ADD_ITEM', response.data))

    }
}