import * as React from 'react';
import styles from './styles.module.css';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function SAButton(props: Props) {
  const { children, className, ...rest } = props;
  return (
    <button className={`${styles.button} ${className}`} {...rest}>{children}</button>
  );
}