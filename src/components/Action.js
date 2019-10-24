import React from 'react';

const Action = (props) => (
  <div>
    <button className="big_button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      Click to know "What to do?"
    </button>
  </div>
);

export default Action;
