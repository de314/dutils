import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './home/Home'
import NotFoundPage from './notfound/NotFoundPage'
import UuidPage from './uuid/UuidPage'
import DatePage from './dates/DatePage'
import ColorsPage from './colors/ColorsPage'
import AboutPage from './about/AboutPage'

const App = () => (
  <div className="App flex flex-column" style={{ minHeight: '100vh' }}>
    <Header />
    <div className="p4 bg-silver flex-auto flex">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/uuids" component={UuidPage} />
        <Route exact path="/dates" component={DatePage} />
        <Route exact path="/colors" component={ColorsPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </div>
)

export default App
