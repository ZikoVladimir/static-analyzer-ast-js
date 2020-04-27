import { getResult } from './utils';

export class NoEval {
  static NAME = 'no-eval';

  static analyze(ast): string[] {
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Use of eval in row "${line}". Recommendations: https://help.semmle.com/wiki/display/JS/Use+of+eval`;
    });
  }
}