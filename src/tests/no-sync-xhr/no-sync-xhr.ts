import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoSyncXhr {
  static NAME = 'no-sync-xhr';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Possible blocking event loop in row "${line}"
          Vulnerability Prevention Recommendations: https://developer.mozilla.org/ru/docs/XMLHttpRequest`;
    });
  }
}