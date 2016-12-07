import React, { PropTypes } from 'react';
import s from './IncidentsByType.scss';

const IncidentsByType = ({ data }) => {
  return (
    <div className={s.main}>
      <div className={s.title}>Incidente dupa tip</div>
      <ul className={s.list}>
      {
        data.map((t, key) => {
          return <li key={key}><strong>{t.type.name}: </strong> {t.count}</li>
        })
      }
      </ul>
    </div>
  );
};

IncidentsByType.propTypes = {
  IncidentsByType: PropTypes.array
};

IncidentsByType.defaultProps = {
  IncidentsByType: []
}

export default IncidentsByType;
