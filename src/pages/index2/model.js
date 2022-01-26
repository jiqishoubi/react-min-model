/* eslint-disable no-unused-vars */
const model = {
  name: 'partStore',
  state: {
    count: 0,
  },
  actions: {
    addCount({ dispatch, getState, payload }) {
      const state = getState()
      return new Promise((resolve) => {
        setTimeout(() => {
          dispatch('save', {
            count: state.count + 1,
          })
          resolve()
        }, 1500)
      })
    },
  },
  reducers: {
    save({ state, payload, dispatch }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

export default model
