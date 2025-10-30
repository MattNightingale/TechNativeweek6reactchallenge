import styles from '../ReactDemo.module.css';

function SearchResults({ searchResults }) {
  return (
    <div className={styles.wrapper}>
      {searchResults.map((drink) => {
        return (
          <div key={drink.id} className={styles.tile}>
            <li className={styles.item}>
              <h2 className={styles.caption}>{drink.name}</h2>
              <img className={styles.image} src={drink.image} />
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
