import styles from "./SiteHeader.module.css";
import React, { useContext } from "react";
import { darkModeContext } from "../ReactDemo/ReactDemo3/DarkMode";

function SiteHeader() {
  const { darkMode } = useContext(darkModeContext);
  return (
    <div className={darkMode ? styles.wrapper + ' ' + styles.dark : styles.wrapper + ' ' + styles.light}>
          <h1>SiteHeader</h1>
    </div>
  );
}

export default SiteHeader;
