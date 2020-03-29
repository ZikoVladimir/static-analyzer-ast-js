import * as babylon from '@babel/parser';
import { getLineNumberList } from './utils';

export class NoBlockingEventLoop {
  static NAME = 'no-blocking-event-loop';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const lineNumberList = getLineNumberList(ast);

    return lineNumberList.map(line => {
      return `WARNING: possible blocking event loop in row "${line}"`;
    });
  }
}