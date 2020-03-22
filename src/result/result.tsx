import * as React from 'react';

import styles from './styles.module.css';

interface Props {
  count: number;
  onClick(): void;
}

export function Result(props: Props) {
  return (
    <div className={styles['result-container']}>
      <div className={styles.result}>
        <span className={styles.row}>Found {props.count} issues</span>
        <span className={styles.row}>The complete log is located in Desktop/log.txt</span>
        <button className={styles.button} onClick={props.onClick}>OK</button>
      </div>
    </div>
  );
}