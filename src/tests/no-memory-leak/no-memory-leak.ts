import * as babylon from '@babel/parser';
import { getLineNumberList } from './utils';

export class NoMemoryLeak {
  static NAME = 'no-memory-leak';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const lineNumberList = getLineNumberList(ast);

    return lineNumberList.map(line => {
      return `WARNING: unexpected With statement in row "${line}"`;
    });
  }
}