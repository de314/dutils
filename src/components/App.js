import React from 'react'

import ReduxToastr from 'react-redux-toastr'
import { Switch, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './home/Home'
import NotFoundPage from './notfound/NotFoundPage'
import UuidPage from './uuid/UuidPage'
import DatePage from './dates/DatePage'
import ColorsPage from './colors/ColorsPage'
import JsonLintPage from './lint/json/JsonLintPage'
import AboutPage from './about/AboutPage'

const App = () => (
  <div className="App flex flex-column" style={{ minHeight: '100vh' }}>
    <ReduxToastr timeOut={1200} />
    <Header />
    <div className="p4 bg-silver flex-auto flex">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/uuids" component={UuidPage} />
        <Route exact path="/dates" component={DatePage} />
        <Route exact path="/colors" component={ColorsPage} />
        <Route exact path="/lint/json" component={JsonLintPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </div>
)

export default App
