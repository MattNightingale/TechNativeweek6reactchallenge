import styles from './SiteFooter.module.css';
import { useContext } from 'react';
import { darkModeContext } from '../ReactDemo/ReactDemo3/DarkMode';

function SiteFooter() {
  const { darkMode } = useContext(darkModeContext);
  return (
    <div className={darkMode ? styles.wrapper + ' ' + styles.dark : styles.wrapper + ' ' + styles.light}>
      &copy; Matt Nightingale 2025
    </div>
  );
}

export default SiteFooter;