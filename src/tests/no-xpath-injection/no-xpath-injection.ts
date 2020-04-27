import { getResult } from './utils';

export class NoXpathInjection {
  static NAME = 'no-XPath-injection';

  static analyze(ast): string[] {
    const result = getResult(ast);

    return result.map(line => {
      return `Warning: Potential Xpath injection in row "${line}". Recommendations: https://help.semmle.com/wiki/display/JS/XPath+injection`;
    });
  }
}