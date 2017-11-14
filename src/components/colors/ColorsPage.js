import React from 'react'
import _ from 'lodash'
import { selectActiveColor } from 'rdx/selectors'
import { setActiveColor, addColor } from 'rdx/actions'

import { connect } from 'react-redux'
import { compose, withProps, withState } from 'recompose'
import { withWrapper } from 'components/hoc'

import { ChromePicker } from 'react-color'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SavedColorList from './SavedColorList'

import './ColorsPage.css'

const HEX_COLOR_PATTERN = /#[a-fA-F0-9]{3,6}/

const ColorsPage = ({ addColor, color, setColor, valid }) => (
  <div className="ColorsPage">
    <div className="clearfix mb3">
      <div className="col col-6 p1">
        <label>Color</label>
        <input
          type="text"
          className="block fill h2 field"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <div className="py2">
          <em className="muted">
            Use the text box above to enter text. The chrome color picker text box is semi-janky
            when inputting hex values.
          </em>
        </div>
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
          <button className="btn btn-outline purple ml2" onClick={() => addColor(color)}>
            <i className="fa fa-plus" /> Save {color}
          </button>
        </div>
      </div>
      <div className="col col-6 p1">
        <SavedColorList setColor={setColor} />
      </div>
    </div>
  </div>
)

export default compose(
  withWrapper(),
  connect(
    state => ({ color: selectActiveColor(state) }),
    dispatch => ({
      setColor: color => dispatch(setActiveColor(color)),
      addColor: color => dispatch(addColor(color)),
    }),
  ),
  withProps(({ color }) => ({
    valid: _.isString(color) && color.match(HEX_COLOR_PATTERN),
  })),
)(ColorsPage)
