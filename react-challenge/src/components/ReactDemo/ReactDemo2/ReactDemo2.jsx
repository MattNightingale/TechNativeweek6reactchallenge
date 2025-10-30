import styles from "../ReactDemo.module.css";
import { useEffect, useState } from "react";
import cocktailDB from "./api";
import Drinks from "./Drinks";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import SearchResults from "./SearchResults";

function ReactDemo2() {
  const [searchResults, setSearchResults] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState("true");

  async function search(term) {
    await cocktailDB.search(term).then((result) => setSearchResults(result));
    console.log(searchResults);
  }

  useEffect(() => {
    tenDrinksArray();
  }, []);

  useEffect(() => {
    getDrinkData();
  }, []);

  async function tenDrinksArray() {
    let drinksArray = [];

    for (let i = 0; i < 10; i++) {
      drinksArray.push(await cocktailDB.randomDrink([i]));
    }
    return drinksArray;
  }

  function getDrinkData() {
    tenDrinksArray()
      .then((data) => {
        setDrinks(data);
        return data;
      })
      .then(() => setLoading(false));
  }

  if (loading) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.demo__header}>Displaying API data with React</h3>
        <SearchBar onSearch={search} />
        <Loading />
      </div>
    );
  }
  if (searchResults.length > 0) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.demo__header}>Displaying API data with React</h3>
        <SearchBar onSearch={search} />
        <SearchResults searchResults={searchResults} />
      </div>
    );
  }

  else {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.demo__header}>Displaying API data with React</h3>
        <SearchBar onSearch={search} />
        <Drinks drinks={drinks} />
      </div>
    );
  } 
  
}

export default ReactDemo2;
