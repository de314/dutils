import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './home/Home'
import UuidPage from './uuid/UuidPage'
import DatePage from './dates/DatePage'

const App = () => (
  <div className="App flex flex-column" style={{ minHeight: '100vh' }}>
    <Header />
    <div className="p4 bg-silver flex-auto flex">
      <Switch>
        <Route exact path="/uuids" component={UuidPage} />
        <Route exact path="/dates" component={DatePage} />
        <Route exact path="/colors" component={DatePage} />
        <Route exact path="/about" component={DatePage} />
        <Route component={Home} />
      </Switch>
    </div>
  </div>
)

export default App
