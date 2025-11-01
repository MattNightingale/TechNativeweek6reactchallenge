import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavourites, removeFromFavourites } from "./ReactDemo4Slice";
import styles from "../ReactDemo.module.css";

function FavouriteDrinks({ drinks }) {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

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
      <h3 className={styles.demo__header}>Showing your favourite drinks thanks to the Redux-toolkit store</h3>
      <h4 className={styles.demo__subheader}>You can also unfavourite them here to remove</h4>

      {favourites.map((drink) => {
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

export default FavouriteDrinks;
