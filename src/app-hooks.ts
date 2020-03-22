import * as React from 'react';
import { useState } from 'react';

export function useTests(initialValue: Test[]) {
  const [tests, changeTests] = useState(initialValue);

  const changeTest = (name: string, shouldPerform: boolean) => {
    const testsCopy = tests.slice();
    testsCopy.forEach(test => {
      if (test.name === name) {
        test.shouldPerform = shouldPerform;
      }
    });

    changeTests(testsCopy);
  };

  return {
    tests,
    changeTest
  };
}

export function usePath(initialPath: string = '') {
  const [path, setPath] = useState(initialPath);

  const onChange = (path: string) => {
    setPath(path);
  };

  return {
    onChange,
    value: path
  };
}

export function useVisibility() {
  const [isVisible, changeVisibility] = useState(false);

  const hide = () => {
    changeVisibility(false);
  };

  const show = () => {
    changeVisibility(true);
  };

  return {
    isVisible,
    hide,
    show
  };
}