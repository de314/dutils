import React from 'react'

import { withFloatingWrapper } from 'components/hoc'

const AboutPage = () => (
  <div className="AboutPage center">
    <h1>Coming Soon!</h1>
    <p className="muted">
      Contact <a href="mailto:david@de314.com">david@de314.com</a> or find out more on{' '}
      <a href="https://github.com/de314/dutils">Dutil's Github Page</a>.
    </p>
  </div>
)

export default withFloatingWrapper()(AboutPage)
