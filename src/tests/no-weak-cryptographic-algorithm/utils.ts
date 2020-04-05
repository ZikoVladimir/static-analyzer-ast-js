import * as type from '@babel/types';
import traverse from '@babel/traverse';
import { weakCryptoAlgorithmList } from './algorithm-list-utils';

export const getResult = (ast): number[] => {
  const result: number[] = [];

  const cryptoRequireName = getCryptoRequireName(ast);

  if (cryptoRequireName) {
    traverse(ast, {
      CallExpression(path) {
        if (type.isMemberExpression(path.node.callee)
          && type.isIdentifier(path.node.callee.object, { name: cryptoRequireName })
          && type.isIdentifier(path.node.callee.property, { name: 'createCipheriv' })
          && path.node.arguments && path.node.arguments.length
          && type.isStringLiteral(path.node.arguments[0])
          && weakCryptoAlgorithmList.includes(path.node.arguments[0].value)) {
          result.push(path.node.loc.start.line);
        }
      }
    });
  }

  return result;
};

function getCryptoRequireName(ast): string {
  let cryptoName: string;

  traverse(ast, {
    VariableDeclarator(path) {
      if (type.isCallExpression(path.node.init)
        && type.isIdentifier(path.node.init.callee, { name: 'require' })
        && path.node.init.arguments && path.node.init.arguments.length
        && type.isStringLiteral(path.node.init.arguments[0], { value: 'crypto' })) {
        cryptoName = path.node.id.name;
      }
    }
  });

  return cryptoName;
}