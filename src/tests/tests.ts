import { NoEval } from './no-eval/no-eval';
import { NoWith } from './no-with/no-with';

export const tests: Test[] = [
  {
    name: NoEval.NAME,
    analyze: NoEval.analyze,
    shouldPerform: true
  },
  {
    name: NoWith.NAME,
    analyze: NoWith.analyze,
    shouldPerform: true
  },
];