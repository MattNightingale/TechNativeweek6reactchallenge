import styles from "../ReactDemo.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../ReactDemo4/ReactDemo4Slice";

function SearchResults({ searchResults }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const handleToggleFavourite = (drink) => {
    const isFavourite = favourites.some((fav) => fav.id === drink.id);
    if (isFavourite) {
      dispatch(removeFromFavourites(drink.id));
    } else {
      dispatch(addToFavourites(drink));
    }
  };

  return (
    <div className={styles.wrapper}>
      {searchResults.map((drink) => {
        return (
          <div key={drink.id} className={styles.tile}>
            <li className={styles.item}>
              <h2 className={styles.caption}>{drink.name}</h2>
              <img className={styles.image} src={drink.image} />
              <button
                className={styles.favouritebutton}
                onClick={() => handleToggleFavourite(drink)}
              >
                <img
                  className={
                    favourites.some((fav) => fav.id === drink.id)
                      ? styles.favourite + " " + styles.active
                      : styles.favourite
                  }
                  src="/images/favheart.png"
                />
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
