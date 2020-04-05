import React, { useState } from 'react';
import { Form } from './form/form';
import { Loader } from './loader/loader';
import { Result } from './result/result';
import { tests } from './tests/tests';
import { TestsContext } from './app-context';
import { usePath, useTests, useVisibility } from './app-hooks';
import { performAnalysis, shouldPerformAnalysis } from './app-utils';

function App() {
  const [warningsCount, changeWarningsCount] = useState(0);
  const result = useVisibility();
  const loader = useVisibility();
  const path = usePath();
  const testsContext = useTests(tests);

  const closeResultWindow = () => {
    result.hide();
    changeWarningsCount(0);
  };

  const start = () => {
    loader.show();
    const output = performAnalysis(path.value, testsContext.tests);
    loader.hide();

    if (output) {
      changeWarningsCount(output.length);
      result.show();
    }
  };

  const disabled = !shouldPerformAnalysis(testsContext.tests) || !path.value;
  return (
    <TestsContext.Provider value={testsContext}>
      <Form start={start}
            path={path.value}
            disabled={disabled}
            setPath={path.onChange}/>
      {loader.isVisible && <Loader/>}
      {result.isVisible && <Result count={warningsCount} onClick={closeResultWindow}/>}
    </TestsContext.Provider>
  );
}

export default App;
