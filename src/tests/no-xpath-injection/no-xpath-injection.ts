import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoXpathInjection {
  static NAME = 'no-XPath-injection';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `Warning: Potential Xpath injection in row "${line}".`;
    });
  }
}