import React from 'react'
import _ from 'lodash'

import { compose, withProps, withState } from 'recompose'
import { withWrapper } from 'components/hoc'

import { ChromePicker } from 'react-color'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './ColorsPage.css'

const HEX_COLOR_PATTERN = /#[a-fA-F0-9]{3,6}/

const ColorsPage = ({ color, setColor, valid }) => (
  <div className="ColorsPage">
    <ChromePicker
      disableAlpha={true}
      className="mx-auto"
      color={color}
      onChangeComplete={c => setColor(c.hex)}
    />
    <div className="center mt3">
      <CopyToClipboard text={color}>
        <button className="btn btn-outline blue">
          <i className="fa fa-copy" /> Copy => {color}
        </button>
      </CopyToClipboard>
    </div>
  </div>
)

export default compose(
  withWrapper(),
  withState('color', 'setColor', '#123abc'),
  withProps(({ color }) => ({
    valid: _.isString(color) && color.match(HEX_COLOR_PATTERN),
  })),
)(ColorsPage)
