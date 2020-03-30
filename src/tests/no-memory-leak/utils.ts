import * as type from '@babel/types';
import traverse from '@babel/traverse';

export const getLineNumberList = (ast): string[] => {
  const lineNumberList: string[] = [];
  const declaratorList: string[] = [];

  if (!isUseStrict(ast)) {
    traverse(ast, {
      VariableDeclaration(path) {
        getNameVariable(path.node).forEach(variable => declaratorList.push(variable));
      },
      AssignmentExpression(path) {
        if (type.isIdentifier(path.node.left) && !declaratorList.includes(path.node.left.name)) {
          lineNumberList.push(path.node.loc.start.line);
        }
      }
    });
  }

  return lineNumberList;
};

function getNameVariable(node): string[] {
  return node.declarations.map(declarator => declarator.id.name);
}

function isUseStrict(ast): boolean {
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