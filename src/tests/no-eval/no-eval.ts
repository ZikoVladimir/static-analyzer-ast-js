import * as babylon from '@babel/parser';
import { getLineNumberList } from './utils';

export class NoEval {
  static NAME = 'no-eval';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const lineNumberList = getLineNumberList(ast);

    return lineNumberList.map(line => {
      return `WARNING: usage eval in row "${line}"`;
    });
  }
}