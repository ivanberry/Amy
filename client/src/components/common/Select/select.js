import React from 'react';
/**
 * options: @param []
 * onchange: func
 * onClick: func
 */

const Select = (props) => {
  let { options } = props;
  return (
    <div>
      <input id='' />
      <datalist id=''>
        <option>xx</option>
      </datalist>
    </div>
  );
};

export default Select;