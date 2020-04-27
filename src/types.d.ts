declare interface Test {
  name: string;
  analyze(ast): string[];
  // shouldPerform - whether the test is enabled by default or not
  shouldPerform: boolean;
}