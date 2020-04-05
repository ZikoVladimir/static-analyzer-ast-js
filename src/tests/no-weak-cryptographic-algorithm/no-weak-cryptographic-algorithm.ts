import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoWeakCryptographicAlgorithm {
  static NAME = 'no-weak-cryptographic-algorithm';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Use of a broken or weak cryptographic algorithm in row "${line}".`;
    });
  }
}