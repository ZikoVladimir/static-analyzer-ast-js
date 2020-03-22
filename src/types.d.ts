declare interface Test {
  name: string;
  shouldPerform: boolean;
  analyze(file: string): string[];
}