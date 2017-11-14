import React from 'react'
import moment from 'moment'
import dateFormats from './dateFormats'
import classnames from 'classnames'

import { compose, withProps, withState } from 'recompose'
import { withWrapper } from 'components/hoc'

import DateInput from './DateInput'
import DateDisplay from './DateDisplay'

const DatePage = ({ date, dateInput, inputFormat, setDateInput, setInputFormat, valid }) => (
  <div className="DatePage">
    <div className="border p2">
      <div className="clearfix">
        <div className="col col-6">
          <div className="h2">Input</div>
          <DateInput
            dateInput={dateInput}
            setDateInput={setDateInput}
            inputFormat={inputFormat}
            setInputFormat={setInputFormat}
            valid={valid}
          />
        </div>
        <div className="col col-6">
          <div className="ml3">
            <div className="h2">Output</div>
            <div className={classnames({ 'bg-aqua p1': valid })}>
              <DateDisplay date={date} valid={valid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default compose(
  withWrapper(),
  withState('dateInput', 'setDateInput', moment().format(dateFormats[0].value)),
  withState('inputFormat', 'setInputFormat', dateFormats[0].value),
  withProps(({ dateInput, inputFormat }) => {
    const date = moment(dateInput, inputFormat)
    return {
      date,
      valid: date.isValid(),
    }
  }),
)(DatePage)
