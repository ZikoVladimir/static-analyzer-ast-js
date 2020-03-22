import * as React from 'react';
// @ts-ignore
import { FilePicker } from 'react-file-picker';

import { SAInput } from '../toolbox/sa-input/sa-input';
import { SAButton } from '../toolbox/sa-button/sa-button';

import { Checkboxes } from './checkboxes';
import styles from './styles.module.css';
import { showErrorMessage } from '../app-utils';

interface Props {
  path: string;
  disabled: boolean;
  start(): void;
  setPath(path: string): void;
}

export function Form(props: Props) {
  return (
    <div className={styles.form}>
      <SAInput placeholder="Введите путь"
               value={props.path}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setPath(e.target.value)}
      />

      <FilePicker extensions={['js']}
                  onChange={(file: File) => props.setPath(file.path)}
                  onError={() => showErrorMessage('Выбранный файл должен иметь расширение ".js"')}>
        <SAButton>Выбрать файл</SAButton>
      </FilePicker>

      <div className={styles.checkboxes}>
        <Checkboxes/>
      </div>
      <SAButton onClick={props.start}
                disabled={props.disabled}>
        Запустить анализатор
      </SAButton>
    </div>
  );
}
