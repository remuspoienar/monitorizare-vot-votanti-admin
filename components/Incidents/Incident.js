import React, { PropTypes } from 'react';

const Incident = (props) => {
  const incident = props.incident;
  return (
    <tr>
      <td>{incident.name}</td>
      <td>{incident.city.name}</td>
      <td>{incident.county.name}</td>
      <td>{incident.createdAt}</td>
    </tr>
  );
};

Incident.propTypes = {
  incident: PropTypes.object,
};

export default Incident;
