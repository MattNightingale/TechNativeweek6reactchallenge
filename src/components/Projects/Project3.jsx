import styles from "./Projects.module.css";

function Project3() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.project__title}>Fetch Me a Drink</h3>
      <div className={styles.project}>
        <div className={styles.project__description}>
        <p >
          This project required the use of Javascript and React to build out a
          couple of pages that display data from an API. The API used is
          TheCocktailDB API. The Challenge was to build 2 pages: A list screen
          that displays a list of drinks and a detail screen that displays
          details about a specific drink. You should display only 10 drinks from
          the API.{" "}
        </p>
        <p>
          Tapping on one of the drinks in this list should take you to the
          detail screen for this drink. The detail screen should display the
          drink's image, name of the drink, alcohol by volume (abv), tagline,
          full description, and one other piece of data of your choice. Optional
          bonus point: add some kind of user interface and functionality to
          display more drinks.{" "}
        </p>
        <p>
          Optional bonus point: add a loading state while drinks are loading.
          ConclusionThis was a fun project which put to work my knowledge of
          APIs and React components to build a working application.
        </p>
        </div>
        <a
          className={styles.project__link}
          href="https://asquared-tech-test.vercel.app/"
        >
          <img
            src="../src/assets/images/fetchmeadrink.png"
            className={styles.project__image}
            alt="fetch me a drink"
          />
        </a>
      </div>
    </div>
  );
}

export default Project3;
