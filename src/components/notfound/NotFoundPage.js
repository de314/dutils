import React from 'react'

import { withFloatingWrapper } from 'components/hoc'

import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div className="NotFoundPage center">
    <div className="h1">Looking for something?</div>
    <div className="h3 muted">
      It's not here. Try <Link to="/">/home</Link>
    </div>
  </div>
)

export default withFloatingWrapper()(NotFoundPage)
