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

// <div className="playdate-host">
//   <span class="playdate-host-pic">
//     <%= image_tag current_user.profile_photo.url.to_s %>
//   </span>
//   <span>Hosted by {props.host}</span>
// </div>


// <div className="playdate-time">
//   // {new Intl.DateTimeFormat('en-US', {
//   //     year: 'numeric',
//   //     month: 'short',
//   //     day: 'numeric',
//   //     weekday: 'short',
//   //     hour: 'numeric',
//   //     minute: '2-digit'
//   // }).format(props.time)}
// </div>
