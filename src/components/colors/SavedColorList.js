import React from 'react'
import PropTypes from 'prop-types'
import { selectSavedColors } from 'rdx/selectors'
import { removeColor, clearColors } from 'rdx/actions'
import classnames from 'classnames'

import { connect } from 'react-redux'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const SavedColorTile = ({ color, removeColor, setColor }) => (
  <div className="SavedColorTile p1">
    <CopyToClipboard text={color}>
      <div className="border rounded" style={{ backgroundColor: color }}>
        <div className="clearfix">
          <div className="col col-8 flex flex-center p2 clickable" onClick={() => setColor(color)}>
            <div className="flex mx-auto bg-white black p1">{color}</div>
          </div>
          <div className="col col-4 bg-white">
            <button className="btn btn-primary block fill bg-blue">
              <i className="fa fa-copy" /> Copy
            </button>
            <button className="btn btn-outline block fill red" onClick={() => removeColor(color)}>
              <i className="fa fa-trash" /> Delete
            </button>
          </div>
        </div>
      </div>
    </CopyToClipboard>
  </div>
)

const SavedColorList = ({ clearColors, colors, removeColor, setColor }) => (
  <div className="SavedColorList">
    <div className="clearfix">
      <div className={classnames('mb2 right', { hide: colors.length === 0 })}>
        <button className="btn btn-primary bg-red" onClick={() => clearColors()}>
          <i className="fa fa-trash" /> Clear
        </button>
      </div>
    </div>
    {colors.map(color => (
      <SavedColorTile color={color} removeColor={removeColor} setColor={setColor} key={color} />
    ))}
  </div>
)

SavedColorList.propTypes = {
  setColor: PropTypes.func.isRequired,
}

export default connect(
  state => ({ colors: selectSavedColors(state) }),
  dispatch => ({
    removeColor: color => dispatch(removeColor(color)),
    clearColors: () => dispatch(clearColors()),
  }),
)(SavedColorList)
