import * as type from '@babel/types';
import traverse from '@babel/traverse';

export const getResult = (ast): number[] => {
  const result: number[] = [];

  traverse(ast, {
    CallExpression(path) {
      if (type.isIdentifier(path.node.callee, { name: 'require' })
        && path.node.arguments && path.node.arguments.length
        && type.isIdentifier(path.node.arguments[0])) {
        result.push(path.node.loc.start.line);
      }
    }
  });

  return result;
};