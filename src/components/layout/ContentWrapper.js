import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

const defaultStyle = {}
const floatingStyle = { minWidth: '60vw', alignSelf: 'center' }

const ContentWrapper = ({
  padding = true,
  bg = 'bg-white',
  floating = false,
  children,
}) => (
  <div
    className={classnames('ContentWrapper', bg, {
      p3: padding,
      'flex-auto': !floating,
      'mx-auto': floating,
    })}
    style={floating ? floatingStyle : defaultStyle}
  >
    {children}
  </div>
)

ContentWrapper.propTypes = {
  bg: PropTypes.string,
  floating: PropTypes.bool,
  padding: PropTypes.bool,
}

export default ContentWrapper
