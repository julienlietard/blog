import React from 'react';
import './styles.css';
import {TiDeleteOutline} from 'react-icons/ti';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='astronomie'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch} className="croix"><TiDeleteOutline/></span>}
      <button>Rechercher</button>
    </form>
  </div>
);

export default SearchBar;
