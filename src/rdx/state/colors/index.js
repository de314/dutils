import { combineReducers } from 'redux'
import active from './active'
import saved from './saved'

export default combineReducers({
  active,
  saved,
})

export * from './active'
export * from './saved'
