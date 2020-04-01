import traverse from '@babel/traverse';

export const getResult = (ast): number[] => {
  const result: number[] = [];

  traverse(ast, {
    WithStatement(path) {
      result.push(path.node.loc.start.line);
    }
  });

  return result;
};