import React from "react"
import { Link } from "react-router-dom"

const NavBar = (props) => {
  return (
    <div className="row">
      <div className="column">
        <nav className="react-nav">
          <ul>
            <li><Link to="/playdates">All Playdates</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
