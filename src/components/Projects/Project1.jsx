import styles from "./Projects.module.css";

function Project1() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.project__title}>Adventure Generator</h3>
      <div className={styles.project}>
        <div className={styles.project__description}>
        <p>
          The project includes: HTML, CSS and Javascript code CSS and class
          names structure by BEM standards Modular Javascript structure JSON
          operations CSS variables and SVG filters Explicit Prettier
          configuration (so that all the code looks clear to you) The git
          structure features: Clear commit naming Branching for issues Grouping
          issues into milestones Asynchronous workflow Design The website has
          been created usign a premade Figma design with some alterations
        </p>
        </div>
        <a className={styles.project__link} href="https://adventure-generator-6i8mtqdgp-mattnightingales-projects.vercel.app/">
          <img
            src="../src/assets/images/adventuregenerator.png"
            className={styles.project__image}
            alt="adventure generator"
          />
        </a>
      </div>
    </div>
  );
}

export default Project1;
