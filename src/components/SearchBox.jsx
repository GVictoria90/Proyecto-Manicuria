import React, { useState } from "react";
import Button from "./Button";
import "./SearchBox.css";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // onSearch(searchTerm);
  };

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <Button onClick={undefined} className={""}>
              {"Buscar"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
