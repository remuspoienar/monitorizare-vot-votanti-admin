import React, { PropTypes } from 'react';
import Icon from '../Icon/Icon';
import TextInput from '../Form/TextInput';
import s from './SearchBox.scss';

const SearchBox = ({ placeholder, searchString, onChange }) => {
  const iconName = searchString.length === 0 ? 'search' : 'cancel';

  return (
    <div className={s.wrapper}>
      <TextInput
        placeholder={placeholder}
        value={searchString}
        onChange={onChange}
      />
      <Icon name={iconName} />
    </div>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  searchString: PropTypes.string,
  onChange: PropTypes.func,
};

SearchBox.defaultProps = {
  placeholder: 'Search',
  searchString: '',
  onChange: () => {},
};

export default SearchBox;
