import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => (
  <div className="Header">
    <nav className="clearfix white bg-black">
      <div className="sm-col">
        <NavLink to="/" className="btn py2">
          <div className="h1 black bg-white p1">/D</div>
        </NavLink>
        <NavLink to="/uuids" className="btn py2">
          UUID's
        </NavLink>
        <NavLink to="/dates" className="btn py2">
          Dates
        </NavLink>
        <NavLink to="/colors" className="btn py2">
          Colors
        </NavLink>
        <NavLink to="/lint/json" className="btn py2">
          JSON Lint
        </NavLink>
      </div>
      <div className="sm-col-right">
        <NavLink to="/about" className="btn py2">
          About
        </NavLink>
      </div>
    </nav>
  </div>
)

export default Header
