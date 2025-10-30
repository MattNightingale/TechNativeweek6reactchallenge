import styles from '../ReactDemo.module.css';

function Drinks({ drinks }) {
  return (
    <div className={styles.wrapper}>
      {drinks.map((drink) => {
        return (
          <div key={drink[0].id} className={styles.tile}>
            <li className={styles.item}>
              <h2 className={styles.caption}>{drink[0].name}</h2>
              <img className={styles.image} src={drink[0].image} />
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default Drinks;
