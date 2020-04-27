import { getResult } from './utils';

export class NoWith {
  static NAME = 'no-with';

  static analyze(ast): string[] {
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Unexpected WithStatement in row "${line}". Recommendations: https://help.semmle.com/wiki/display/JS/With+statement`;
    });
  }
}