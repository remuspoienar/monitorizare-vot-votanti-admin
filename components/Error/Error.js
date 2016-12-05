import React, { PropTypes } from 'react';
import s from './Error.scss';

const Error = ({ error }) => {
  let message = 'There was an error...';
  if (typeof error === 'string') {
    message = error;
  }
  if (typeof error === 'object') {
    if (error.Message) {
      message = error.Message;
    }
  }

  return (
    <div className="Error">
      <div className="Error-title">Error</div>
      <span>{message}</span>
    </div>
  );
};

Error.propTypes = {
};

export default Error;
