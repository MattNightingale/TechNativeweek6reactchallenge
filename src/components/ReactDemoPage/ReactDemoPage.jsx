import styles from "./ReactDemoPage.module.css";
import { useState } from "react";
import ReactDemo1 from "../ReactDemo/ReactDemo1";
import ReactDemo2 from "../ReactDemo/ReactDemo2/ReactDemo2";
import ReactDemo3 from "../ReactDemo/ReactDemo3/ReactDemo3";
import ReactDemo4 from "../ReactDemo/ReactDemo4/ReactDemo4";
import ReactDemo5 from "../ReactDemo/ReactDemo5";

function Projects() {
  const [demo, setDemo] = useState(<ReactDemo1 />);
  const [activeTabButton, setActiveTabButton] = useState("button1");

  function clickHandler(event) {
    if (event === "ReactDemo1") {
      setDemo(<ReactDemo1 />);
      setActiveTabButton("button1")
    } else if (event === "ReactDemo2") {
      setDemo(<ReactDemo2 />);
      setActiveTabButton("button2")
    } else if (event === "ReactDemo3") {
      setDemo(<ReactDemo3 />);
      setActiveTabButton("button3")
    } else if (event === "ReactDemo4") {
      setDemo(<ReactDemo4 />);
      setActiveTabButton("button4")
    } else if (event === "ReactDemo5") {
      setDemo(<ReactDemo5 />);
      setActiveTabButton("button5")
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <button
          className={activeTabButton === "button1" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("ReactDemo1")}
        >
          useEffect
        </button>
        
        <button
          className={activeTabButton === "button3" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("ReactDemo3")}
        >
          useContext
        </button>
        <button
          className={activeTabButton === "button2" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("ReactDemo2")}
        >
          API demo
        </button>
      <button
          className={activeTabButton === "button4" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("ReactDemo4")}
        >
          ReactDemo 4
        </button>
        {/*  <button
          className={activeTabButton === "button5" ? styles.tab__button + ' ' + styles.active : styles.tab__button}
          onClick={() => clickHandler("ReactDemo5")}
        >
          ReactDemo 5
        </button> */}
      </div>
      <div className={styles.content}>{demo}</div>
    </div>
  );
}

export default Projects;
