import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoWith {
  static NAME = 'no-with';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Unexpected WithStatement in row "${line}"
          Vulnerability Prevention Recommendations: https://help.semmle.com/wiki/display/JS/With+statement`;
    });
  }
}