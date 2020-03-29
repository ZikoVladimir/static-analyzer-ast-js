import { NoEval } from './no-eval/no-eval';
import { NoWith } from './no-with/no-with';
import { NoBlockingEventLoop } from './no-blocking-event-loop/no-blocking-event-loop';

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
  {
    name: NoBlockingEventLoop.NAME,
    analyze: NoBlockingEventLoop.analyze,
    shouldPerform: true
  },
];