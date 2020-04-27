import { getResult } from './utils';

export class NoUnmatchableDollarInRegexp {
  static NAME = 'no-unmatchable-dollar-in-regexp';

  static analyze(ast): string[] {
    const result = getResult(ast);

    return result.map(line => {
      return `Error: Unmatchable dollar in regular expression in row "${line}". Recommendations: https://help.semmle.com/wiki/display/JS/Unmatchable+dollar+in+regular+expression`;
    });
  }
}