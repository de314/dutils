import React from 'react'

import ContentWrapper from './layout/ContentWrapper'

export const withWrapper = (ops = {}) => Component => props => (
  <ContentWrapper {...ops}>
    <Component {...props} />
  </ContentWrapper>
)

export const withFloatingWrapper = (ops = {}) => Component => props => (
  <ContentWrapper {...{ ...ops, floating: true }}>
    <Component {...props} />
  </ContentWrapper>
)
