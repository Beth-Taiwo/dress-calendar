const state = () => ({
  clothes: [],
})

const mutations = {
  setClothes(state, payload) {
    state.clothes = payload
  },
}

const actions = {
  setClothes({ commit }, payload) {
    commit('setClothes', payload)
  },
}

const getters = {
  getClothes: (state) => state.clothes,
}

export { state, mutations, actions, getters }
