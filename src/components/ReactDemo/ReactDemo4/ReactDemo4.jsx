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
    <div>
      <h3>Showing your favourite drinks as per the Redux store</h3>
      <h2>You can also unfavourite them here to remove</h2>
      {favourites.map((drink) => {
        return (
          <div key={drink.id} className={styles.tile}>
            
              <h2 className={styles.caption}>{drink.id}</h2>
           </div>   
        );
      })} 
    </div>
  );
}

export default FavouriteDrinks;
