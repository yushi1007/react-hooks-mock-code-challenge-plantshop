import React from "react";

function Search({ searchName, onSearch }) {

  const handleSearch = (event) => {
    onSearch(event.target.value)
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchName}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
