import React from 'react'
import _ from 'lodash'
import uuid from 'uuid'
import classnames from 'classnames'

import { compose, withState, withHandlers } from 'recompose'
import { withWrapper } from 'components/hoc'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import './UuidStyles.css'

const IdTile = ({ id: { val, touched }, onTouch }) => (
  <div className={classnames('IdTile p1 col col-3', { touched })}>
    <CopyToClipboard text={val} onCopy={() => onTouch(val)}>
      <div className="h3 m1 p1 border">{val}</div>
    </CopyToClipboard>
  </div>
)

const UuidPage = ({ ids, onTouch, refresh }) => (
  <div className="UuidPage">
    <p>
      Get v4 UUID's for testing/hard coded use cases. This is a, inferior add supported,{' '}
      <a href="https://www.uuidgenerator.net/">alternative</a>.
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

const genIds = (count = 16) => _.range(16).map(i => ({ val: uuid(), touched: false }))

export default compose(
  withWrapper(),
  withState('ids', 'setIds', genIds()),
  withHandlers({
    refresh: ({ setIds }) => () => setIds(genIds()),
    onTouch: ({ ids, setIds }) => val => {
      _.find(ids, { val }).touched = true
      setIds([...ids])
    },
  }),
)(UuidPage)
