import * as React from 'react';

import styles from './styles.module.css';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function SAInput(props: InputProps) {
  const placeholder = props.placeholder ? props.placeholder.toUpperCase() : undefined;

  return (
    <input className={styles.input}
           {...props}
           placeholder={placeholder}
    />
  );
}
