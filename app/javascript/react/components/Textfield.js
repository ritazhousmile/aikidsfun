import React from 'react';

const Textfield = (props) => {
  return (
    <div>
      <label>{props.label}
        <input
          name={props.name}
          type='text'
          value={props.content}
          onChange={props.inputChange}
         />
      </label>
    </div>
  )
}

export default Textfield
