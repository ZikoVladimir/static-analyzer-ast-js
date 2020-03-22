import { NoEval } from './no-eval/no-eval';

export const tests: Test[] = [
  {
    name: NoEval.NAME,
    analyze: NoEval.analyze,
    shouldPerform: true
  },
];