import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import PlaydateIndexContainer from '../containers/PlaydateIndexContainer'

const NavBar = (props) => {
  return (
    <div className="row">
      <div className="column">
        <Switch>
          <Route exact path="/playdates" component={PlaydateIndexContainer} />
        </Switch>
      </div>
    </div>
  );
};
export default NavBar;
