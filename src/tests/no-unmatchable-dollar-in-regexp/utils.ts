import * as type from '@babel/types';
import traverse from '@babel/traverse';

export const getResult = (ast): number[] => {
  const result: number[] = [];

  const regExp: RegExp = new RegExp(/[$]./g);

  traverse(ast, {
    CallExpression(path) {
      if (type.isMemberExpression(path.node.callee)
        && type.isIdentifier(path.node.callee.property, { name: 'match' })
        && path.node.arguments && path.node.arguments.length
        && type.isRegExpLiteral(path.node.arguments[0])
        && !!path.node.arguments[0].pattern.match(regExp)) {
        result.push(path.node.loc.start.line);
      }
    }
  });

  return result;
};