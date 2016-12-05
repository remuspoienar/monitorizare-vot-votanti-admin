import React, { PropTypes } from 'react';
import s from './Icon.scss';

const Icon = ({ name }) => {
  const className = `${s.icon} icon icon-${name}`;
  return <i className={className} />;
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
