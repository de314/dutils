import _ from 'lodash'
import { ADD_COLOR, REMOVE_COLOR, CLEAR_COLORS } from 'rdx/actions'

const selectSlice = state => _.get(state, 'colors.saved')

export const selectSavedColors = state => selectSlice(state)

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COLOR: {
      return [action.color, ...state]
    }

    case REMOVE_COLOR: {
      return state.filter(color => color !== action.color)
    }

    case CLEAR_COLORS: {
      return []
    }

    default:
  }
  return state
}
