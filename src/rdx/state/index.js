import { combineReducers } from 'redux'
import colors from './colors'
import uuids from './uuids'
import { reducer as toastr } from 'react-redux-toastr'

export default combineReducers({
  colors,
  toastr,
  uuids,
})

export * from './colors'
export * from './uuids'
