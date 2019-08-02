import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import PlaydateIndexContainer from '../containers/PlaydateIndexContainer'
import PlaydateShowContainer from '../containers/PlaydateShowContainer'

const NavBar = (props) => {
  return (
    <div className="row">
      <div className="column">
        <Switch>
          <Route exact path="/playdates" component={PlaydateIndexContainer} />
          <Route exact path="/playdates/:id" component={PlaydateShowContainer} />
        </Switch>
      </div>
    </div>
  );
};
export default NavBar;
