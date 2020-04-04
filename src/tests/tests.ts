import { NoEval } from './no-eval/no-eval';
import { NoWith } from './no-with/no-with';
import { NoSyncXhr } from './no-sync-xhr/no-sync-xhr';
import { NoMemoryLeak } from './no-memory-leak/no-memory-leak';
import { NoImpliedEval } from './no-implied-eval/no-implied-eval';

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
    name: NoSyncXhr.NAME,
    analyze: NoSyncXhr.analyze,
    shouldPerform: true
  },
  {
    name: NoMemoryLeak.NAME,
    analyze: NoMemoryLeak.analyze,
    shouldPerform: true
  },
  {
    name: NoImpliedEval.NAME,
    analyze: NoImpliedEval.analyze,
    shouldPerform: true
  }
];