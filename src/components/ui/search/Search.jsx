import "./search.css";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchContainer = ({ placeholder, filter, reset }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const searchValue = e.target.value;

    setValue(searchValue);
    handleSearch(searchValue);
  };

  const handleSearch = (searchValue) => {
    console.log(searchValue);
    if (searchValue.trim()) return filter(searchValue);
    filter(searchValue.trim());
  };

  return (
    <div className="search_container">
      <FontAwesomeIcon icon={faSearch} />
      <input onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
};

export default SearchContainer;
