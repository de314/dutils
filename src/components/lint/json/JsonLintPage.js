import React from 'react'
import _ from 'lodash'
import jsonLint from 'json-lint'
import classnames from 'classnames'
import { toastr } from 'react-redux-toastr'

import { compose, withProps, withState } from 'recompose'
import { withWrapper } from 'components/hoc'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const JsonLintPage = ({ json, lint, setJson, valid }) => (
  <div className="JsonLintPage">
    <div className={classnames('p3', { hide: !valid })}>
      <CopyToClipboard text={json} onCopy={() => toastr.success('Colpied')}>
        <button className="btn btn-primary bg-green fill">
          <i className="fa fa-copy" /> Copy
        </button>
      </CopyToClipboard>
    </div>
    <div className="clearfix">
      <div className={classnames('col p1', { 'col-12': valid, 'col-7': !valid })}>
        <textarea
          className={classnames('field bg-black', { green: valid, red: !valid })}
          value={json}
          onChange={e => setJson(e.target.value)}
          style={{ width: '100%', minHeight: '80vh' }}
        />
      </div>
      <div className={classnames('col p1', { hide: valid, 'col-5': !valid })}>
        <div className="h3 red">{lint.error}</div>
        <div className="mt2 m3 red muted mono">{lint.evidence}</div>
        <p>Line: {lint.line}</p>
        <p>Character: {lint.character}</p>
      </div>
    </div>
  </div>
)

export default compose(
  withWrapper(),
  withState('json', 'setJson', '{}'),
  withProps(({ json }) => {
    let lint = {}
    try {
      lint = jsonLint(json)
    } catch (e1) {
      lint.error = e1
    }
    if (_.isNil(lint.error)) {
      try {
        json = JSON.stringify(JSON.parse(json), null, 2)
      } catch (e2) {
        lint.error = e2.message
      }
    }
    const valid = _.isNil(lint.error)
    return {
      lint,
      valid,
      json,
    }
  }),
)(JsonLintPage)
