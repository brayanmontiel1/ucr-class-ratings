// src/components/Search.js

import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .review
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div align="left">
        <p className="green"><b>Clearly Positive</b></p>
        <p className="light-green"><b>Positive</b></p>
        <p className="gray"><b>Neutral</b></p>
        <p className="light-blue"><b>Mixed</b></p>
        <p className="washed-red"><b>Negative</b></p>
        <p className="red"><b>Clearly Negative</b></p>
      </div>
      <div className="black ma0 grow" align="center">
        <h2 className="f2">Search your course:</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-white ma3"
          type = "search" 
          placeholder = "Search your class..." 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;