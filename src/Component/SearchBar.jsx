import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const location = useLocation(); 
  const isTvShowsPage = location.pathname === '/tv-shows'; 

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query); 
  };

  return (
    <form className="d-flex" onSubmit={handleSearch}>
      <input
        type="text"
        className="form-control me-2"
        placeholder={isTvShowsPage ? 'Cerca Serie TV...' : 'Cerca Film...'}
        value={query}
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-light" type="submit">Cerca</button>
    </form>
  );
};

export default SearchBar;
