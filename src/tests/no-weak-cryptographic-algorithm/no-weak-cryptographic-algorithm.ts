import { getResult } from './utils';

export class NoWeakCryptographicAlgorithm {
  static NAME = 'no-weak-cryptographic-algorithm';

  static analyze(ast): string[] {
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Use of a broken or weak cryptographic algorithm in row "${line}". Recommendations: https://help.semmle.com/wiki/display/JS/Use+of+a+broken+or+weak+cryptographic+algorithm`;
    });
  }
}