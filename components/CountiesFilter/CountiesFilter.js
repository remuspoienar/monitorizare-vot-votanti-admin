import React, { PropTypes } from 'react';
import s from './CountiesFilter.scss';

const CountiesFilter = ({ counties, selectedCounties }) => {

  return (
    <div className="CountiesFilter">
      <div className="CountiesFilter-title">Judete</div>
      {
        counties.map((c, key) => {
          return (
            <div key={key}>
              <input type="checkbox" />
              <span>{c.name}</span>
            </div>
          )
        })
      }
    </div>
  );
};

CountiesFilter.propTypes = {
  counties: PropTypes.array
};

CountiesFilter.defaultProps = {
  counties: []
}

export default CountiesFilter;
