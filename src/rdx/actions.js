const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.forEach((arg, index) => (action[argNames[index]] = args[index]))
  return action
}

/* <<<<<<< COLORS >>>>>>>> */

export const ADD_COLOR = 'ADD_COLOR'
export const addColor = makeActionCreator(ADD_COLOR, 'color')

export const REMOVE_COLOR = 'REMOVE_COLOR'
export const removeColor = makeActionCreator(REMOVE_COLOR, 'color')

export const CLEAR_COLORS = 'CLEAR_COLORS'
export const clearColors = makeActionCreator(CLEAR_COLORS)

export const SET_ACTIVE_COLOR = 'SET_ACTIVE_COLOR'
export const setActiveColor = makeActionCreator(SET_ACTIVE_COLOR, 'color')

/* <<<<<<< UUIDS >>>>>>>> */

export const SET_UUIDS = 'SET_UUIDS'
export const setUuids = makeActionCreator(SET_UUIDS, 'ids')

export const TOUCH_UUID = 'TOUCH_UUID'
export const touchUuid = makeActionCreator(TOUCH_UUID, 'val')
