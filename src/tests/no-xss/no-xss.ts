import { getResult } from './utils';

export class NoXss {
  static NAME = 'no-XSS';

  static analyze(ast): string[] {
    const result = getResult(ast);

    return result.map(line => {
      return `Error: Client-side cross-site scripting in row "${line}". Recommendations: https://help.semmle.com/wiki/display/JS/Client-side+cross-site+scripting`;
    });
  }
}