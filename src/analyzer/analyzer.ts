import * as babylon from '@babel/parser';

export function analyze(file: string, tests: Test[]) {
  const ast = babylon.parse(file);

  let output: string[] = [];

  tests.forEach(test => {
    if (test.shouldPerform) {
      output = output.concat(test.analyze(ast));
    }
  });

  return output;
}