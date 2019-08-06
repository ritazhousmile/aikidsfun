import React from 'react';

const PlaydateShow = (props) => {
  let editButton
  let deleteButton
  let attendButton
  let attendees

  if (props.currentUser.id == props.hostId) {
    editButton = <button onClick={props.handleClick}>Edit</button>
    deleteButton = <button onClick={props.handleDelete}>Delete</button>
  } else {
    attendButton = <button onClick={props.handleAttendClick}>Attend</button>
  }

   attendees = props.attendees.map (attendee => {
    return(
      <div key={attendee.id} className="playdate-attendee">
        <a href={"/users/" + attendee.id}>
          <img className="profile-photo-round" src={attendee.profile_photo.url}></img>
        </a>
      </div>
    )
  })
  
  return(
    <div>
      <div className="playdate-header">
        <div className="playdate-name">
          <h3>{props.name}</h3>
            {editButton}
            {deleteButton}
            {attendButton}
        </div>
      </div>
      <div>Hosted by {props.hostFirstName + ' ' + props.hostLastName}</div>
      <div>Time: {props.time}</div>

      <div className="playdate-details">
        <div className="playdate-location">Location: {props.location}</div>
        <div className="playdate-desc">Description: {props.description}</div>
      </div>
      <div className="playdate-attendees">Attendees: {attendees}</div>
    </div>
  )
}
export default PlaydateShow;
