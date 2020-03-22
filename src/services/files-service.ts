// @ts-ignore
const electron = window.require('electron').remote;
const fs = electron.require('fs');
const path = require('path');
const { app } = electron.require('electron');

export const fileService = {
  readFile: (path: string): string => {
    return fs.readFileSync(path, 'utf-8');
  },
  writeToFile: (output: string[]): void => {
    fs.writeFileSync(getOutputFilePath(), outputToString(output));
  }
};

function getOutputFilePath() {
  return path.join(electron.app.getPath('desktop'), 'logs.txt');
}

function outputToString(output: string[]) {
  return output.join('\r\n');
}