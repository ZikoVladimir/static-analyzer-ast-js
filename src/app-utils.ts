// @ts-ignore
const electron = window.require('electron').remote;

import { fileService } from './services/files-service';
import { analyze } from './analyzer/analyzer';

export function shouldPerformAnalysis(tests: Test[]): boolean {
  let shouldPerform = false;
  tests.forEach(test => {
    if (test.shouldPerform) {
      shouldPerform = true;
    }
  });

  return shouldPerform;
}

export function performAnalysis(path: string, tests: Test[]): string[] | null {
  let output = null;
  try {
    if (!checkPath(path)) {
      showErrorMessage('Выбранный файл должен иметь расширение ".js"');
    } else {
      const file = fileService.readFile(path);
      output = analyze(file, tests);
      fileService.writeToFile(output);
    }
  } catch (e) {
    console.log(e);
    showErrorMessage('Указан некорректный путь');
  }

  return output;
}

export function showErrorMessage(message: string) {
  const options = {
    type: 'error',
    message
  };

  electron.dialog.showMessageBox(null, options);
}

function checkPath(path: string): boolean {
  return path.indexOf('.js') > 0;
}
