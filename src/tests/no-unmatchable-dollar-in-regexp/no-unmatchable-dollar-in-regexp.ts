import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoUnmatchableDollarInRegexp {
  static NAME = 'no-unmatchable-dollar-in-regexp';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `Error: Unmatchable dollar in regular expression in row "${line}".
          Vulnerability Prevention Recommendations: https://help.semmle.com/wiki/display/JS/Unmatchable+dollar+in+regular+expression`;
    });
  }
}