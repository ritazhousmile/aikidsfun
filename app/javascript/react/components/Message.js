import React from 'react';

const Message = (props) => {
  return(
    <div>
    <p>
      <img src={props.profilePhoto.url} width="40"/>
      <strong> {props.firstName}: </strong>
      {props.message}
    </p>
    </div>
  );
};

export default Message;
