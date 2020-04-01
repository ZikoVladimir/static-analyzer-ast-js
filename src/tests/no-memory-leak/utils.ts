import * as type from '@babel/types';
import traverse from '@babel/traverse';

interface Listener {
  name: string;
  line: number;
}

export const getResult = (ast): number[] => {
  const result: number[] = [];
  const declaratorList: string[] = [];

  if (!checkUseStrict(ast)) {
    traverse(ast, {
      VariableDeclaration(path) {
        getNameVariable(path.node).forEach(variable => declaratorList.push(variable));
      },

      AssignmentExpression(path) {
        if (type.isIdentifier(path.node.left) && !declaratorList.includes(path.node.left.name)
          || type.isMemberExpression(path.node.left)
          && type.isIdentifier(path.node.left.object, { name: 'window' })) {
          result.push(path.node.loc.start.line);
        }
      },
    });
  }

  let listenerList: Listener[] = [];
  let list = [];

  traverse(ast, {
    MemberExpression(path) {
      if (type.isIdentifier(path.node.property, { name: 'addEventListener' }) &&
        type.isIdentifier(path.node.object)) {
        listenerList.push({
          name: path.node.object.name,
          line: path.node.loc.start.line
        });
      }

      if (type.isIdentifier(path.node.property, { name: 'addEventListener' }) &&
        type.isCallExpression(path.node.object)) {
        listenerList.push({
          name: `${path.node.object.callee.property}('${path.node.object.arguments[0].value}')`,
          line: path.node.loc.start.line
        });
      }

      if (type.isIdentifier(path.node.property, { name: 'removeEventListener' }) &&
        type.isCallExpression(path.node.object)) {
        listenerList = listenerList.filter(item => item.name !== `${path.node.object.callee.property}('${path.node.object.arguments[0].value}')`);
      }

      if (type.isIdentifier(path.node.property, { name: 'removeEventListener' })) {
        listenerList = listenerList.filter(item => item.name !== path.node.object.name);
      }
    },
  });

  console.log(list);
  listenerList.forEach(item => result.push(item.line));

  return result;
};

function getNameVariable(node): string[] {
  return node.declarations.map(declarator => declarator.id.name);
}

function checkUseStrict(ast): boolean {
  let isUseStrict: boolean = false;

  traverse(ast, {
    DirectiveLiteral(path) {
      if (path.node.value === 'use strict') {
        isUseStrict = true;
      }
    }
  });

  return isUseStrict;
}