import _ from 'lodash'
import { SET_UUIDS, TOUCH_UUID } from 'rdx/actions'
import generateUuidSet from 'utils/generateUuidSet'

const selectSlice = state => _.get(state, 'uuids')

export const selectUuids = state => selectSlice(state)

const defaultState = generateUuidSet()

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_UUIDS: {
      return [...action.ids]
    }

    case TOUCH_UUID: {
      const { val } = action
      const id = _.find(state, { val })
      if (!_.isNil(id)) {
        id.touched = true
        return [...state]
      }
    }

    default:
  }
  return state
}
