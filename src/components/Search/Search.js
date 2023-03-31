import React from "react";
import "./Search.css";

const Search = ({ product, value, onChangeData }) => {
  return (
    <>
      <input
        className="form-control me-2 input-search w-100"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={onChangeData}
      />
    </>
  );
};

export default Search;
