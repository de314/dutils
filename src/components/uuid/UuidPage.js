import React from 'react'
import generateUuidSet from 'utils/generateUuidSet'
import classnames from 'classnames'
import { selectUuids } from 'rdx/selectors'
import { setUuids, touchUuid } from 'rdx/actions'
import { toastr } from 'react-redux-toastr'

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withWrapper } from 'components/hoc'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import './UuidStyles.css'

const IdTile = ({ id: { val, touched }, onTouch }) => (
  <div className={classnames('IdTile p1 col col-3', { touched })}>
    <CopyToClipboard
      text={val}
      onCopy={() => {
        onTouch(val)
        toastr.success('Copied')
      }}
    >
      <div className="h3 m1 p1 border">{val}</div>
    </CopyToClipboard>
  </div>
)

const UuidPage = ({ ids, onTouch, refresh }) => (
  <div className="UuidPage">
    <p>
      Get v4 UUID's for testing/hard coded use cases. This is a, inferior add
      supported, <a href="https://www.uuidgenerator.net/">alternative</a>.
    </p>
    <div className="p3 flex flex-column">
      <button className="btn btn-primary bg-green h3 fit" onClick={refresh}>
        <i className="fa fa-refresh" /> Refresh
      </button>
    </div>
    <div className="center h1 gray">Click to copy</div>
    <div className="clearfix">
      {ids.map(id => <IdTile id={id} onTouch={onTouch} key={id.val} />)}
    </div>
  </div>
)

export default compose(
  withWrapper(),
  connect(
    state => ({
      ids: selectUuids(state),
    }),
    dispatch => ({
      refresh: () => dispatch(setUuids(generateUuidSet())),
      onTouch: id => dispatch(touchUuid(id)),
    }),
  ),
)(UuidPage)
