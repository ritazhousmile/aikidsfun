import React from 'react';

const PlaydateShow = (props) => {
  return(
    <div>
      <div className="playdate-name">
        <h3>{props.name}</h3>
      </div>
      <div>Hosted by {props.host}</div>
      <div className="playdate-location">{props.location}</div>
      <div className="playdate-time">{props.time}</div>
      <div className="playdate-desc">{props.description}</div>
    </div>

  )
}
export default PlaydateShow;
