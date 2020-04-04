import * as type from '@babel/types';
import traverse from '@babel/traverse';

export const getResult = (ast): number[] => {
  const result: number[] = [];

  const xpathName = getXpathName(ast);

  if (xpathName) {
    traverse(ast, {
      CallExpression(path) {
        console.log(path);
        if (type.isMemberExpression(path.node.callee)
          && type.isIdentifier(path.node.callee.object, { name: xpathName })
          && type.isIdentifier(path.node.callee.property, { name: 'parse' })
          && (type.isBinaryExpression(path.node.arguments[0])
            || type.isTemplateLiteral(path.node.arguments[0])
            && path.node.arguments[0].expressions.length)) {
          result.push(path.node.loc.start.line);
        }
      }
    });
  }

  return result;
};

function getXpathName(ast): string {
  let xpathName: string;

  traverse(ast, {
    VariableDeclarator(path) {
      if (type.isCallExpression(path.node.init)
        && type.isIdentifier(path.node.init.callee, { name: 'require' })
        && type.isStringLiteral(path.node.init.arguments[0], { value: 'xpath' })) {
        xpathName = path.node.id.name;
      }
    }
  });

  return xpathName;
}