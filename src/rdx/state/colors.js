import _ from 'lodash'
// import { ACTION_NAME } from '../actions'

const selectSlice = state => _.get(state, 'colors')

export const selectColors = state => selectSlice(state).reverse()

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    //case ACTION_NAME: {
    //  return {
    //    ...state,
    //    testing: action.testing
    //  }
    //}

    default:
  }
  return state
}
