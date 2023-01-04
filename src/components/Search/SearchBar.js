import React from "react";
import "./search.css";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div class="input-icons">
      <i class="fa fa-search icon"></i>
      <input
        class="input-field"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
