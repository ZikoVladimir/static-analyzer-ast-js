import { getResult } from './utils';

export class NoImpliedEval {
  static NAME = 'no-implied-eval';

  static analyze(ast): string[] {
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Use of implied eval in row "${line}". Recommendations: https://help.semmle.com/wiki/display/JS/Call+to+eval-like+DOM+function`;
    });
  }
}