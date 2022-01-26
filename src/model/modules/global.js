/* eslint-disable no-unused-vars */
const initialState = {
  globalCount: 0,
}
const model = {
  name: 'global',
  state: initialState,
  actions: {
    addGlobalCount({ dispatch, getState, payload }) {
      const state = getState()
      const { global } = state // 因为这里是分模块的 所以state中有2层
      return new Promise((resolve) => {
        setTimeout(() => {
          dispatch('global/save', {
            globalCount: global.globalCount + 1,
          })
          return resolve()
        }, 1500)
      })
    },
  },
  reducers: {
    save({ state, payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

export default model
