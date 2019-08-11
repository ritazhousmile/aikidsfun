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
      <div className="columns small-6 medium-6 large-6 align-self-bottom">
        <div id="playdate-name" className="playdate-header playdate-show-box">
          <h3>{props.name}</h3>
          <div id="playdate-show-host-name">
            Hosted by {props.hostFirstName + ' ' + props.hostLastName}
          </div>
          {editButton}
          {deleteButton}
          {attendButton}
        </div>
        <div className="playdate-summary playdate-show-box">
          <div>Time: {props.time}</div>
          <div className="playdate-location">Location: {props.location}</div>
        </div>
        <div className="playdate-details playdate-show-box">
          <h3>Details</h3>
          <div className="playdate-desc">{props.description}</div>
        </div>
      </div>
      <div className="columns small-6 medium-6 large-6">
        <div className="playdate-attendees playdate-show-box">
          <h3>Attendees</h3>
          {attendees}
        </div>
      </div>
    </div>
  )
}
export default PlaydateShow;
