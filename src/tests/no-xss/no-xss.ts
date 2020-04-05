import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoXss {
  static NAME = 'no-XSS';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `Error: Client-side cross-site scripting in row "${line}".
          Vulnerability Prevention Recommendations: https://help.semmle.com/wiki/display/JS/Client-side+cross-site+scripting`;
    });
  }
}