import React from 'react';

const TextFieldWithSubmit = props => {
  return (
    <div className='input-group'>
      <input
        className='input-group-field'
        name={props.name}
        onChange={props.handlerFunction}
        type='text'
        value={props.content}
        placeholder={props.placeholder} />
      <input type='submit' className='input-group-button button' value='Chat' />
    </div>
  );
}

export default TextFieldWithSubmit;
