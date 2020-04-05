import * as type from '@babel/types';
import traverse from '@babel/traverse';

export const getResult = (ast): number[] => {
  const result: number[] = [];

  traverse(ast, {
    CallExpression(path) {
      if (type.isMemberExpression(path.node.callee)
        && type.isIdentifier(path.node.callee.object, { name: 'document' })
        && type.isIdentifier(path.node.callee.property, { name: 'write' })
        && path.node.arguments && path.node.arguments.length && (type.isBinaryExpression(path.node.arguments[0])
          || type.isTemplateLiteral(path.node.arguments[0])
          && path.node.arguments[0].expressions.length)) {
        result.push(path.node.loc.start.line);
      }
    }
  });

  return result;
};