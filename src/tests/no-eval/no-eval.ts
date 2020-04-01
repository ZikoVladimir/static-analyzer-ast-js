import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoEval {
  static NAME = 'no-eval';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Use of eval in row "${line}".`;
    });
  }
}