import { Outlet } from "react-router-dom";
import styles from './MainContent.module.css';
import { useContext } from "react";
import { darkModeContext } from "../ReactDemo/ReactDemo3/DarkMode";

function MainContent() {
  const { darkMode } = useContext(darkModeContext);
  return (
    <div className={darkMode ? styles.wrapper + ' ' + styles.dark : styles.wrapper}>
      <Outlet /> 
    </div>
  );
}

export default MainContent;