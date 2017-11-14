import React from 'react'
import _ from 'lodash'

import ContentWrapper from './layout/ContentWrapper'

export const withWrapper = (ops = {}) => Component => props => {
  if (_.isFunction(ops)) {
    ops = ops(props)
  }
  return (
    <ContentWrapper {...ops}>
      <Component {...props} />
    </ContentWrapper>
  )
}

export const withFloatingWrapper = (ops = {}) => Component => props => {
  if (_.isFunction(ops)) {
    ops = ops(props)
  }
  return (
    <ContentWrapper {...{ ...ops, floating: true }}>
      <Component {...props} />
    </ContentWrapper>
  )
}
