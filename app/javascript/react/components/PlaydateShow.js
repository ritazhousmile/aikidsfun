import React from 'react';

const PlaydateShow = (props) => {
  return(
    <div>
      <div className="playdate-header">
        <div className="playdate-name">
          <h3>{props.name}</h3>
        </div>
      </div>
      <div className="playdate-details">
        <div className="playdate-location">{props.location}</div>
        <div className="playdate-desc">{props.description}</div>
      </div>
    </div>
  )
}
export default PlaydateShow;
