import _ from 'lodash'
import { SET_ACTIVE_COLOR } from 'rdx/actions'

const selectSlice = state => _.get(state, 'colors.active')

export const selectActiveColor = state => selectSlice(state)

const defaultState = '#123abc'

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACTIVE_COLOR: {
      return action.color
    }

    default:
  }
  return state
}
