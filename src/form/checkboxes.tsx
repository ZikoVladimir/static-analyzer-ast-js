import * as React from 'react';
import { useContext } from 'react';
import { SACheckbox } from '../toolbox/sa-checkbox/sa-checkbox';
import { TestsContext } from '../app-context';

import styles from './styles.module.css';

export function Checkboxes() {
  const testsContext = useContext(TestsContext);
  const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    testsContext.changeTest(value, checked);
  };

  return (
    <>
      {
        testsContext.tests.map(test => {
          return <SACheckbox
            label={test.name}
            value={test.name}
            key={test.name}
            checked={test.shouldPerform}
            className={styles.checkbox}
            onChange={onClick}
          />;
        })
      }
    </>
  );
}