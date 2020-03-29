import * as type from '@babel/types';
import traverse from '@babel/traverse';

export const getLineNumberList = (ast): string[] => {
  const lineNumberList: string[] = [];

  let declaratorList: string[] = [];

  traverse(ast, {
    VariableDeclaration(path) {
      declaratorList = [...declaratorList ,...getXhrDeclaratorList(path.node)];
    }
  });

  traverse(ast, {
    MemberExpression(path) {
      if (type.isIdentifier(path.node.property, { name: 'alert' }) &&
        type.isIdentifier(path.node.object, { name: 'window' }) ||
        findSyncAjax(path) || findSyncXhr(path, declaratorList)) {
        lineNumberList.push(path.node.loc.start.line);
      }
    },
    CallExpression(path) {
      if (type.isIdentifier(path.node.callee, { name: 'alert' })) {
        lineNumberList.push(path.node.loc.start.line);
      }
    },
  });

  return lineNumberList;
};

function findSyncAjax(path): boolean {
  return type.isIdentifier(path.node.object, { name: 'jQuery' }) &&
    type.isIdentifier(path.node.property, { name: 'ajax' }) &&
    path.parent.arguments &&
    path.parent.arguments.find(arg => findAsyncProperty(arg.properties));
}

function findAsyncProperty(properties): boolean {
  return properties.find(property => {
    return type.isIdentifier(property.key, { name: 'async' }) &&
      type.isBooleanLiteral(property.value, { value: false });
  });
}

// todo: refactor

function getXhrDeclaratorList(node): string[] {
  return node.declarations
    .filter(declarator => {
      return type.isNewExpression(declarator.init) &&
        type.isIdentifier(declarator.init.callee, { name: 'XMLHttpRequest' })
    })
    .map(declarator => declarator.id.name);
}

function findSyncXhr(path, declaratorList: string[]): boolean {
  return checkDeclaratorList(declaratorList, path.node.object.name) &&
    type.isIdentifier(path.node.property, { name: 'open' }) &&
    path.parent.arguments && path.parent.arguments.length >= 2 &&
    type.isLiteral(path.parent.arguments[2], { value: false });
}

function checkDeclaratorList(declaratorList: string[], value: string): boolean {
  return !!declaratorList.find(declarator => declarator === value);
}
