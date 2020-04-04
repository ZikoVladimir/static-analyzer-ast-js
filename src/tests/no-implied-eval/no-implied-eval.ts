import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoImpliedEval {
  static NAME = 'no-implied-eval';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Use of implied eval in row "${line}".`;
    });
  }
}