import React from 'react';

const Option = (props) => (
  <div>
    <div className="option">
    <p className="option__text">{props.count}.
    {props.optionText}</p>
      <button className="button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
       x remove
      </button>
     </div>
  </div>
);

export default Option;
