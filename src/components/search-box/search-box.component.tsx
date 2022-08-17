import React, { ChangeEventHandler } from 'react';
import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }: {
  className: string,
  placeholder: string,
  onChangeHandler: ChangeEventHandler
}) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
