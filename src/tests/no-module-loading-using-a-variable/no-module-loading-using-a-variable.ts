import * as babylon from '@babel/parser';
import { getResult } from './utils';

export class NoModuleLoadingUsingAVariable {
  static NAME = 'no-module-loading-using-a-variable';

  static analyze(code: string): string[] {
    const ast = babylon.parse(code);
    const result = getResult(ast);

    return result.map(line => {
      return `WARNING: Avoid module loading using a variable in row "${line}".
          Vulnerability Prevention Recommendations: https://github.com/goldbergyoni/nodebestpractices/blob/security-best-practices-section/sections/security/safemoduleloading.md`;
    });
  }
}