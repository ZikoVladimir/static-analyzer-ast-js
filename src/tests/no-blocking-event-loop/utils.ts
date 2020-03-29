import * as type from '@babel/types';
import traverse from '@babel/traverse';

export const getLineNumberList = (ast): string[] => {
  const lineNumberList: string[] = [];

  traverse(ast, {
    MemberExpression(path) {
      if (type.isIdentifier(path.node.property, { name: 'alert' }) &&
        type.isIdentifier(path.node.object, { name: 'window' }) ||
        findSyncAjax(path)) {
        lineNumberList.push(path.node.loc.start.line);
      }
    },
    CallExpression(path) {
      if (type.isIdentifier(path.node.callee, { name: 'alert' })) {
        lineNumberList.push(path.node.loc.start.line);
      }
    }
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