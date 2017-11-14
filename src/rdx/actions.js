const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.forEach((arg, index) => (action[argNames[index]] = args[index]))
  return action
}

/* <<<<<<< UUIDS >>>>>>>> */

export const SET_UUIDS = 'SET_UUIDS'
export const setUuids = makeActionCreator(SET_UUIDS, 'ids')

export const TOUCH_UUID = 'TOUCH_UUID'
export const touchUuid = makeActionCreator(TOUCH_UUID, 'val')
