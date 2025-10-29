import { useState } from "react";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  function handleTermChange({ target }) {
    setTerm(target.value);
  };

  function handleClear() {
    setTerm("");
  };


  function keyUp(event) {
    if (event.key === "Enter") {
      props.onSearch(term);
      handleClear();
    }
  };

  function newSearch(e) {
    if (term) {
      props.onSearch(term);
      handleClear();
      e.preventDefault();
    }
  };


  return (
    <div className='searchbar'>
      <input
        placeholder="Search for a cocktail"
        onChange={handleTermChange}
        onKeyUp={keyUp}
        required
        value={term}
        id="input"
      />
      <button id='button' type="button" className="search" onClick={newSearch} >
        SEARCH
      </button>
    </div>
  );
}





export default SearchBar