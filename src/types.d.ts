declare interface Test {
  name: string;
  analyze(file: string): string[];
  // shouldPerform - whether the test is enabled by default or not
  shouldPerform: boolean;
}