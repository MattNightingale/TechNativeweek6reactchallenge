import styles from '../ReactDemo.module.css';
import LightSwitch from './LightSwitch';



function ReactDemo3() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.demo__header}>Demonstrating passing state with useContext: Turn off the lights!</h3>
      <LightSwitch />
    </div>
  );
}

export default ReactDemo3;