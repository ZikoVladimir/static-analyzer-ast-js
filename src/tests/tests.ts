import { NoEval } from './no-eval/no-eval';
import { NoWith } from './no-with/no-with';
import { NoSyncXhr } from './no-sync-xhr/no-sync-xhr';
import { NoMemoryLeak } from './no-memory-leak/no-memory-leak';
import { NoImpliedEval } from './no-implied-eval/no-implied-eval';
import { NoXpathInjection } from './no-xpath-injection/no-xpath-injection';
import { NoModuleLoadingUsingAVariable } from './no-module-loading-using-a-variable/no-module-loading-using-a-variable';
import { NoWeakCryptographicAlgorithm } from './no-weak-cryptographic-algorithm/no-weak-cryptographic-algorithm';
import { NoXss } from './no-xss/no-xss';
import { NoUnmatchableDollarInRegexp } from './no-unmatchable-dollar-in-regexp/no-unmatchable-dollar-in-regexp';

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
  },
  {
    name: NoXpathInjection.NAME,
    analyze: NoXpathInjection.analyze,
    shouldPerform: true
  },
  {
    name: NoModuleLoadingUsingAVariable.NAME,
    analyze: NoModuleLoadingUsingAVariable.analyze,
    shouldPerform: true
  },
  {
    name: NoWeakCryptographicAlgorithm.NAME,
    analyze: NoWeakCryptographicAlgorithm.analyze,
    shouldPerform: true
  },
  {
    name: NoXss.NAME,
    analyze: NoXss.analyze,
    shouldPerform: true
  },
  {
    name: NoUnmatchableDollarInRegexp.NAME,
    analyze: NoUnmatchableDollarInRegexp.analyze,
    shouldPerform: true
  }
];