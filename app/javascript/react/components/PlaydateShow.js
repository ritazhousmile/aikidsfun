import React from 'react';

const PlaydateShow = (props) => {
  let editButton
  let deleteButton
  if (currentUserId == props.hostId) {
    editButton = <button onClick={props.handleClick}>Edit</button>
    deleteButton = <button onClick={props.handleDelete}>Delete</button>
  }
  return(
    <div>
      <div className="playdate-header">
        <div className="playdate-name">
          <h3>{props.name}</h3>
            {editButton}
            {deleteButton}
        </div>
      </div>
      <div>Hosted by {props.host}</div>
      <div>Time: {props.time}</div>

      <div className="playdate-details">
        <div className="playdate-location">Location: {props.location}</div>
        <div className="playdate-desc">Description: {props.description}</div>
      </div>
    </div>
  )
}
export default PlaydateShow;
