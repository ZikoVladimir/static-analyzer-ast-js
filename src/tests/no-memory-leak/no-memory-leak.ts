import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoMemoryLeak {
  static NAME = 'no-memory-leak';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Possible memory leak in row "${line}"
          Vulnerability Prevention Recommendations: https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/`;
    });
  }
}