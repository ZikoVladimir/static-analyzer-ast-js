import * as type from '@babel/types';
import traverse from '@babel/traverse';

export const getResult = (ast): number[] => {
  const result: number[] = [];

  traverse(ast, {
    CallExpression(path) {
      if ((type.isIdentifier(path.node.callee, { name: 'setTimeout' })
        || type.isIdentifier(path.node.callee, { name: 'setInterval' })
        || (type.isMemberExpression(path.node.callee)
          && type.isIdentifier(path.node.callee.object, { name: 'window' })
          && (type.isIdentifier(path.node.callee.property, { name: 'setTimeout' })
            || type.isIdentifier(path.node.callee.property, { name: 'setInterval' }))))
        && path.node.arguments && path.node.arguments.length && type.isStringLiteral(path.node.arguments[0])) {
        result.push(path.node.loc.start.line);
      }
    }
  });

  return result;
};