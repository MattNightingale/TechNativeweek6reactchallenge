import styles from "./ProjectsPage.module.css";
import { useState } from "react";
import Project1 from "../Projects/Project1";
import Project2 from "../Projects/Project2";
import Project3 from "../Projects/Project3";
import Project4 from "../Projects/Project4";
import Project5 from "../Projects/Project5";

function Projects() {
  const [project, setProject] = useState(<Project1 />);

  function clickHandler(event) {
    if (event === "Project1") {
      setProject(<Project1 />);
    } else if (event === "Project2") {
      setProject(<Project2 />);
    } else if (event === "Project3") {
      setProject(<Project3 />);
    } else if (event === "Project4") {
      setProject(<Project4 />);
    } else if (event === "Project5") {
      setProject(<Project5 />);
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <button onClick={() => clickHandler("Project1")}>Project 1</button>
        <button onClick={() => clickHandler("Project2")}>Project 2</button>
        <button onClick={() => clickHandler("Project3")}>Project 3</button>
        <button onClick={() => clickHandler("Project4")}>Project 4</button>
        <button onClick={() => clickHandler("Project5")}>Project 5</button>
      </div>
      <div className={styles.content}>{project}</div>
    </div>
  );
}

export default Projects;
