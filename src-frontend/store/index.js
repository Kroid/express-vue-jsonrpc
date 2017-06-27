import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      items: [{id: 1, value: 111}, {id: 2, value: 2222}],
    },
    actions,
    mutations,
    getters
  })
}
