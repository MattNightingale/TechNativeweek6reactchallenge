import React from "react";
import styles from '../ReactDemo.module.css';
import { darkModeContext } from "../ReactDemo3/DarkMode";
import { useContext } from "react";

function LightSwitch() {
    const {darkMode, toggleDarkMode} = useContext(darkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    };

  return (
    <div className={styles.switchcontainer}>
      <img src={darkMode ? `../src/assets/images/switchoff.svg` : `../src/assets/images/switchon.svg`} className={styles.lightswitch} onClick={handleClick}/>
    </div>
  );
}

export default LightSwitch;