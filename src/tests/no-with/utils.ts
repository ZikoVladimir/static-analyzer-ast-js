import traverse from '@babel/traverse';

export const getLineNumberList = (ast): string[] => {
  const lineNumberList: string[] = [];

  traverse(ast, {
    WithStatement(path) {
      lineNumberList.push(path.node.loc.start.line);
    }
  });

  return lineNumberList;
};