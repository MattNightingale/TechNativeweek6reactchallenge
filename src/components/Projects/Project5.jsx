import styles from "./Projects.module.css";

function Project5() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.project__title}>RecAPI</h3>
      <div className={styles.project}>
        <div className={styles.project__description}>
          <p>
            A simple, responsive web application that allows users to search for
            recipes using an external recipe API. Built with HTML, CSS, and
            JavaScript, this project demonstrates how to make asynchronous API
            calls, handle JSON data, and dynamically update the DOM. 🚀 Features
            🔎 Search recipes by keyword (e.g., "chicken", "pasta", "vegan"). 📜
            View detailed recipe information such as ingredients and
            instructions. 🖼️ Display recipe images and relevant metadata (e.g.,
            servings, cooking time). ⚡ Fetch data asynchronously using the
            Fetch API. 💅 Responsive design for both desktop and mobile users.
            🧠 Tech Stack Frontend: HTML5, CSS3, JavaScript (Vanilla) API: [Your
            Recipe API Provider] (e.g., Spoonacular API or TheMealDB ) Tools: VS
            Code, Live Server (for local development)
          </p>
        </div>
        <a
          className={styles.project__link}
          href="https://recipe-finder-khaki-zeta.vercel.app/"
        >
          <img
            src="/images/recapi.png"
            className={styles.project__image}
            alt="recapi"
          />
        </a>
      </div>
    </div>
  );
}

export default Project5;
