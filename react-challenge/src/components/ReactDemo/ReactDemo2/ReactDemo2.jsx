import styles from "../ReactDemo.module.css";
import { useEffect, useState } from "react";
import cocktailDB from "./api";
import Drinks from "./Drinks";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

function ReactDemo2() {
  const [searchResults, setSearchResults] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState("true");

  async function search(term) {
    await cocktailDB.search(term).then((result) => setDrinks(result));
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
    <SearchBar search={search} />;
    return <Loading />;
  } if(!loading) {
    return (
      <div className={styles.wrapper}>
        <SearchBar onSearch={search} />
        <Drinks drinks={drinks} />
      </div>
    );
  } if (searchResults) {
    return (
      <div className={styles.wrapper}>
        <SearchBar onSearch={search} />
        <Drinks drinks={drinks} />
      </div>
    );
}
}

export default ReactDemo2;
