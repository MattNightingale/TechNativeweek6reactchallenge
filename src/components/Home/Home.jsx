import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>Welcome to the React playground</h3>
        <p>
          A simple single-page application built with React. Designed to
          practice and demonstrate some core react concepts and useful methods.
        </p>
        <p>React features used:</p>
        <ul>
          <li>React router</li>
          <li>Components</li>
          <li>Props</li>
          <li>State</li>
          <li>Context API</li>
          <li>Hooks (useState, useContext, useEffect)</li>
          <li>Redux toolkit state management</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
