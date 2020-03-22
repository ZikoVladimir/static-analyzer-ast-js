export function analyze(file: string, tests: Test[]) {
  let output: string[] = [];
  tests.forEach(test => {
    if (test.shouldPerform) {
      output = output.concat(test.analyze(file));
    }
  });

  return output;
}