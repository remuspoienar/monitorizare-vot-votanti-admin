import React, { PropTypes } from 'react';
import s from './TextInput.scss';

const Panel = ({ placeholder, value, onChange }) => {

  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Panel.propTypes = {
  name: PropTypes.string,
};

export default Panel;
