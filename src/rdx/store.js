import { createStore, applyMiddleware, compose } from 'redux'
import persistState from 'redux-localstorage'
import rootReducer from './state'

const middleware = []

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(...middleware), persistState(['colors', 'uuids'])),
)

export default store
