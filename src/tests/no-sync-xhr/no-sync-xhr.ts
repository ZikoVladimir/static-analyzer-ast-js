import { getResult } from './utils';

export class NoSyncXhr {
  static NAME = 'no-sync-xhr';

  static analyze(ast): string[] {
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Possible blocking event loop in row "${line}". Recommendations: https://developer.mozilla.org/ru/docs/XMLHttpRequest`;
    });
  }
}