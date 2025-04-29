import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import PlaydateIndexContainer from '../containers/PlaydateIndexContainer'
import PlaydateShowContainer from '../containers/PlaydateShowContainer'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' component={NavBar} />
          <Switch>
            <Route exact path="/playdates" component={PlaydateIndexContainer} />
            <Route exact path="/playdates/:id" component={PlaydateShowContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
