import { getResult } from './utils';

export class NoMemoryLeak {
  static NAME = 'no-memory-leak';

  static analyze(ast): string[] {
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Possible memory leak in row "${line}". Recommendations: https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/`;
    });
  }
}