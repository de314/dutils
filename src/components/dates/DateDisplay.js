import React from 'react'
import PropTypes from 'prop-types'
import dateFormats from './dateFormats'

import { branch, renderNothing } from 'recompose'

const DateDisplayTile = ({ date, format }) => (
  <div className="DateDisplayTile">
    <div className="border p1 mb2">
      <div className="h3 muted">{format.label}</div>
      <div className="clearfix">
        <div className="col col-6 center mono">{format.value}</div>
        <div className="col col-6">{date.format(format.value)}</div>
      </div>
    </div>
  </div>
)

const DateDisplay = ({ date, valid }) => {
  return (
    <div className="DateDisplay">
      {dateFormats
        .filter(f => f.display)
        .map((format, i) => <DateDisplayTile date={date} format={format} key={i} />)}
    </div>
  )
}

DateDisplay.propTypes = {
  date: PropTypes.object.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default branch(({ valid }) => !valid, renderNothing)(DateDisplay)
