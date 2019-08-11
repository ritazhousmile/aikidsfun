import React from 'react';

const Message = (props) => {
  return(
    <div>
      <img className="profile-photo-round" src={props.profilePhoto.url} width="40"/>
      <strong> {props.firstName}: </strong>
      {props.message}
    </div>
  );
};

export default Message;
