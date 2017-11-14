import { combineReducers } from 'redux'
import colors from './colors'
import uuids from './uuids'

export default combineReducers({
  colors,
  uuids,
})

export * from './colors'
export * from './uuids'
