import * as React from 'react';
import styles from './styles.module.css';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = InputProps & {
  label: string;
}

export function SACheckbox(props: Props) {
  const { label, className, ...rest } = props;
  return (
    <label className={`${styles['checkbox-container']} ${className}`}>
      <input className={styles.checkbox}
             type="checkbox" {...rest} />
      <span className={styles['custom-checkbox']}/>
      <span className={styles.label}>{label}</span>
    </label>
  );
}
