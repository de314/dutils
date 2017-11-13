import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => (
  <div className="Header">
    <nav className="clearfix white bg-black">
      <div className="sm-col">
        <NavLink to="/uuids" className="btn py2">
          UUID's
        </NavLink>
        <NavLink to="/dates" className="btn py2">
          Dates
        </NavLink>
        <NavLink to="/colors" className="btn py2">
          Colors
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
