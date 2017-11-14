import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import dateFormats from './dateFormats'
import { toastr } from 'react-redux-toastr'

import { branch, renderNothing } from 'recompose'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const DateDisplayTile = ({ date, format }) => (
  <div className="DateDisplayTile">
    <div className="border p1 mb2">
      <div className="h3 muted">{format.label}</div>
      <div className="clearfix">
        <div className="col col-6 center mono">
          {_.defaultTo(format.value, <span>&nbsp;</span>)}
        </div>
        <div className="col col-6">
          <div className="bg-white" style={{ display: 'inline-block' }}>
            <CopyToClipboard
              text={date.format(format.value)}
              onCopy={() => toastr.success('Copied')}
            >
              <button className="btn btn-outline navy">
                <i className="fa fa-copy" /> {date.format(format.value)}
              </button>
            </CopyToClipboard>
          </div>
        </div>
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
