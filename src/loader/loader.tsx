import * as React from 'react';

import logo from './logo.svg';
import styles from './styles.module.css';

export function Loader() {
  return (
    <div className={styles.loader}>
      <img src={logo} alt="loader image" className={styles.logo}/>
    </div>
  );
}