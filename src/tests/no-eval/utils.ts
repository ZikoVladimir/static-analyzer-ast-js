import * as type from '@babel/types';
import traverse from '@babel/traverse';

const findEvalInArguments = argumentList => argumentList.find(arg => type.isIdentifier(arg, { name: 'eval' }));

export const getResult = (ast): number[] => {
  const result: number[] = [];

  traverse(ast, {
    MemberExpression(path) {
      if (type.isIdentifier(path.node.property, { name: 'eval' })) {
        result.push(path.node.loc.start.line);
      }
    },
    CallExpression(path) {
      if (type.isIdentifier(path.node.callee, { name: 'eval' }) ||
        (path.node.arguments && findEvalInArguments(path.node.arguments))) {
        result.push(path.node.loc.start.line);
      }
    }
  });

  return result;
};