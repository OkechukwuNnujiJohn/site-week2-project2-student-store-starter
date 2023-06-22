import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform the search operation here
    console.log('Search query:', searchQuery);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
