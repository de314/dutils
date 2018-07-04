import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'

import dateFormats from './dateFormats'

const DateInput = ({
  dateInput,
  setDateInput,
  inputFormat,
  setInputFormat,
  valid,
}) => {
  return (
    <div className="DateInput">
      <label className="mb2">Format</label>
      <input
        type="text"
        className="block col-12 field mb2"
        value={inputFormat}
        onChange={e => setInputFormat(e.target.value)}
      />
      <label className="mb1">Value</label>
      <div className="flex">
        <input
          type="text"
          className={classnames('block field flex-auto', {
            'is-error': !valid,
          })}
          value={dateInput}
          onChange={e => setDateInput(e.target.value)}
        />
        <button
          className="btn btn-outline olive"
          onClick={() => setDateInput(moment().format(inputFormat))}
        >
          <i className="fa fa-clock-o" /> Now
        </button>
      </div>
      <div className="clearfix">
        {dateFormats.map((format, i) => (
          <div className="FormatTile p1 col col-4" key={i}>
            <div
              className={classnames('border rounded p1 clickable center ', {
                shadow: format.value === inputFormat,
                'bg-aqua': format.value === inputFormat && valid,
                'bg-red': format.value === inputFormat && !valid,
              })}
              onClick={() => setInputFormat(format.value)}
            >
              <div className="h43">{format.label}</div>
              <div className="muted">
                <div className="mono">{format.value}</div>
                <div># {format.example}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

DateInput.propTypes = {
  dateInput: PropTypes.string.isRequired,
  inputFormat: PropTypes.string.isRequired,
  setDateInput: PropTypes.func.isRequired,
  setInputFormat: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default DateInput
