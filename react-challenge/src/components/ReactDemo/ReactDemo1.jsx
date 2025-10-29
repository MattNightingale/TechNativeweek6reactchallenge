import styles from './ReactDemo.module.css';
import { useEffect, useState } from 'react';

function ReactDemo1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount((prevCount) => prevCount + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <p>{count} seconds have passed since you clicked this tab</p>
    </div>
  );
}

export default ReactDemo1;