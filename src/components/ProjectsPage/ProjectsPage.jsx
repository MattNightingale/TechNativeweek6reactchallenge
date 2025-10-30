import styles from "./ProjectsPage.module.css";
import { act, useState } from "react";
import Project1 from "../Projects/Project1";
import Project2 from "../Projects/Project2";
import Project3 from "../Projects/Project3";
import Project4 from "../Projects/Project4";
import Project5 from "../Projects/Project5";

function Projects() {
  const [project, setProject] = useState(<Project1 />);
  const [activeTabButton, setActiveTabButton] = useState("button1");
  

  function clickHandler(event) {
    if (event === "Project1") {
      setProject(<Project1 />);
      setActiveTabButton("button1")
    } else if (event === "Project2") {
      setProject(<Project2 />);
      setActiveTabButton("button2");
     
    } else if (event === "Project3") {
      setProject(<Project3 />);
      setActiveTabButton("button3");
      
    } else if (event === "Project4") {
      setProject(<Project4 />);
      setActiveTabButton("button4");
     
    } else if (event === "Project5") {
      setProject(<Project5 />);
      setActiveTabButton("button5");
      
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}> 
        <button
          className={activeTabButton === "button1" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("Project1")}
          id="button1"
        >
          Adventure Generator
        </button>
        <button
          className={activeTabButton === "button2" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("Project2")}
        >
          Ask Beatz
        </button>
        <button
          className={activeTabButton === "button3" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("Project3")}
        >
          Fetch Me a Drink
        </button>
        <button
          className={activeTabButton === "button4" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("Project4")}
        >
          Jammmin'
        </button>
        <button
          className={activeTabButton === "button5" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("Project5")}
        >
          RecAPI
        </button>
      </div>
      <div className={styles.content}>{project}</div>
    </div>
  );
}

export default Projects;
