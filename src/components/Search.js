import React from "react";

function Search({searchPlants, setSearchPlants}) {
  
  function handleSearch(e){
    setSearchPlants(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlants}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
