import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Panel.scss';

const Panel = ({ children, primary, type, className }) => {
  return React.createElement(
    'div', // eslint-disable-line no-nested-ternary
    {
      className: cx(
        'Panel',
        type && `Panel--${type}`,
        {
          'Panel--primary': primary,
        },
        className
      ),
    },
    children
  );
};

Panel.propTypes = {
  primary: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Panel;
