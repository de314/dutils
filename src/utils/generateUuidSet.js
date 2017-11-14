import _ from 'lodash'
import uuid from 'uuid'

const generateUuidSet = (count = 16) => _.range(16).map(i => ({ val: uuid(), touched: false }))

export default generateUuidSet
