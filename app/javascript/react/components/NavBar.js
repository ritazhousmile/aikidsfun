import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import PlaydateIndexContainer from '../containers/PlaydateIndexContainer'
import PlaydateShowContainer from '../containers/PlaydateShowContainer'

const NavBar = (props) => {
  return (
    <div className="row">
      <div className="column">
        <div className="navbar">
        <Link to="/playdates">Playdates</Link>
        </div>

        <div className="navbar">
        <Link to="/users">Parent Profiles</Link>
        </div>

        <Switch>
          <Route exact path="/playdates" component={PlaydateIndexContainer} />
          <Route exact path="/playdates/:id" component={PlaydateShowContainer} />
        </Switch>
      </div>
    </div>
  );
};
export default NavBar;
