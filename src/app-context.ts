import * as React from 'react';
import { tests } from './tests/tests';

export const TestsContext = React.createContext({
  tests, changeTest: (name: string, shouldPerform: boolean) => {}
});