import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoXss {
  static NAME = 'no-XSS';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `Error: Potential client-side cross-site scripting in row "${line}".`;
    });
  }
}