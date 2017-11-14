import React from 'react'

import { withWrapper } from 'components/hoc'

import { Link } from 'react-router-dom'

const HomePage = () => (
  <div className="HomePage">
    <ul className="list-reset h3">
      <li>
        <Link to="/uuids" className="btn btn-outline blue mb2">
          UUID's
        </Link>
      </li>
      <li>
        <Link to="/dates" className="btn btn-outline blue mb2">
          Dates
        </Link>
      </li>
      <li>
        <Link to="/colors" className="btn btn-outline blue mb2">
          Colors
        </Link>
      </li>
      <li>
        <Link to="/regex" className="btn btn-outline blue mb2">
          Regex
        </Link>
      </li>
      <li>
        <Link to="/lint/json" className="btn btn-outline blue mb2">
          Json Linter
        </Link>
      </li>
    </ul>
  </div>
)

export default withWrapper()(HomePage)
