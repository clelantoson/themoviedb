import React from "react";

const SearchBar = (props) => {
  const { searchMovie, setSearchMovie } = props;
  const handleOnChange = (event) => {
    setSearchMovie(event.target.value);
  };
  return (
    <div className="navbar">
      <input
        className="input"
        type="text"
        value={searchMovie}
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default SearchBar;
