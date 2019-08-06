import React from 'react';
import { Link } from 'react-router-dom';

const PlaydateTile = (props) => {
  return(
    <div className="playdate-box">
    <center>
      <div className="playdate-name">
        <Link to={`/playdates/${props.id}`}><h3>{props.name}</h3></Link>
      </div>
      <div>Hosted by {props.host}
        <a href={"/users/" + props.hostId}>
          <img className="profile-photo-round" src={props.hostProfilePhoto.url}></img>
        </a>
      </div>

      <div className="playdate-location">Location: {props.location}</div>
      <div className="playdate-time">Time: {props.time}</div>
      <div className="playdate-desc">{props.description}</div>
      </center>
    </div>
  )
}
export default PlaydateTile
