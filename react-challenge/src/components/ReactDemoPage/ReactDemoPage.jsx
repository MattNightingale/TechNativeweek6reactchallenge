import styles from "./ReactDemoPage.module.css";
import { useState } from "react";
import ReactDemo1 from "../ReactDemo/ReactDemo1";
import ReactDemo2 from "../ReactDemo/ReactDemo2";
import ReactDemo3 from "../ReactDemo/ReactDemo3";
import ReactDemo4 from "../ReactDemo/ReactDemo4";
import ReactDemo5 from "../ReactDemo/ReactDemo5";

function Projects() {
  const [demo, setDemo] = useState(<ReactDemo1 />);

  function clickHandler(event) {
    if (event === "ReactDemo1") {
      setDemo(<ReactDemo1 />);
    } else if (event === "ReactDemo2") {
      setDemo(<ReactDemo2 />);
    } else if (event === "ReactDemo3") {
      setDemo(<ReactDemo3 />);
    } else if (event === "ReactDemo4") {
      setDemo(<ReactDemo4 />);
    } else if (event === "ReactDemo5") {
      setDemo(<ReactDemo5 />);
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <button onClick={() => clickHandler("ReactDemo1")}>ReactDemo 1</button>
        <button onClick={() => clickHandler("ReactDemo2")}>ReactDemo 2</button>
        <button onClick={() => clickHandler("ReactDemo3")}>ReactDemo 3</button>
        <button onClick={() => clickHandler("ReactDemo4")}>ReactDemo 4</button>
        <button onClick={() => clickHandler("ReactDemo5")}>ReactDemo 5</button>
      </div>
      <div className={styles.content}>{demo}</div>
    </div>
  );
}

export default Projects;
