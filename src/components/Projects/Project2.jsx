import styles from "./Projects.module.css";

function Project2() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.project__title}>Ask Beatz</h3>
      <div className={styles.project}>
        <div className={styles.project__description}>
        <p >
          A responsive website for Ask Beatz, created as part of the TechNative
          Challenge 5 - Company Website project. Built using HTML, CSS and
          JavaScript, following a supplied Figma design and focused on AI-driven
          functionality. 📝 Overview This project was built from a partially
          completed codebase and expanded to include full functionality for both
          the Ask and Shop pages, as well as filling in the previously empty
          Home and About pages. The Ask page uses AI integration to suggest
          songs based on moods, vibes and feelings, with pre-filled prompt
          options for ease of use. The Shop page includes product listings with
          sorting and page size controls, allowing users to browse dynamically
          loaded items with "show more" functionality. The Home and About pages
          have text and image content, with buttons to navigate through the site
          and tabs to look at paged content. Screenshot of site 🖥️ Features
          AI-powered song recommendations based on user input Pre-filled prompt
          suggestions on the Ask page Dynamic "show more" functionality Sort and
          page size controls on the Shop page JavaScript-driven interactivity
          throughout Responsive layout for desktop and mobile 🎨 Design Based on
          a supplied Figma design Layout and components adapted for both desktop
          and mobile Focus on interactive and engaging UI elements ⚙️
          Technologies Used HTML CSS JavaScript Tools: Git and GitHub Deployment
          using GitHub Pages Development deployment and testing with Vercel
        </p>
    </div>
        <a className={styles.project__link} href="https://ask-beatz.vercel.app/">
          <img
            src="/images/askbeatz.png"
            className={styles.project__image}
            alt="ask beatz"
          />
        </a>
      </div>
    </div>
  );
}

export default Project2;
