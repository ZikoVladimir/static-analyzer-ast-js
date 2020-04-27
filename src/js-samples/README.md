## AST Static Analyzer

Разработанный статический анализатор является инструментом для идентификации и составления отчетов по шаблонам, найденным в коде ECMAScript / JavaScript.

Руководство по разработке собственного плагина:

1. Выбрать уязвимость. Рекомендуем обратить особое внимание на следующие источники
при поиске уязвимостей кода:
    1. [SEMMLE](https://help.semmle.com/wiki/display/JS/JavaScript+queries)
    2. [CWE](https://cwe.mitre.org/index.html)
    3. [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
2. Добавить в директорию js-samples тест с кратким описанием исследуемой уязвимости в формате:
    * Name
    * Description
    * ID
    * Kind
    * Severity
    * Precision
    * Link
    * Main code (correct/incorrect case).
    ```javascript
   /**
    *
    * Name: Use of eval
    * Description: The 'eval' function and the 'Function' constructor execute strings as code.
    *              This is dangerous and impedes program analysis and understanding.
    *              Consequently, these two functions should not be used.
    * ID: js/eval-call
    * Kind: problem
    * Severity: recommendation
    * Precision: medium
    * Link: https://help.semmle.com/wiki/display/JS/Use+of+eval
    *
    **/
   
   /** Case #1 **/
   const valueFromInput = `require("child_process").exec('rm -rf ./*')`;
   /** Case #2 **/
   const valueFromInput_2 = `for(;;) {}`;
   /** Case #3 **/
   const valueFromInput_3 = `alert(document.cookie)`;
   /** Case #4 **/
   const valueFromInput_4 = `location.href = 'http://hacker.com'`;
   
   /** MAIN CODE **/
   
   const input = document.querySelector('input');
   
   const submit = document.querySelector('button');
   
   submit.addEventListener('click', () => eval(input.value));
   
   /** MAIN CODE **/
    ```
3. Добавить в tests/tests.ts непосредственно свой тест в формате:
    * Name: __Название вашего теста__.NAME,
    * Analyze: __Название вашего теста__.analyze,
    * shouldPerform: true (если данный параметр true, то реализуемый плагин будет включен по умолчанию при первоначальном
    запуске приложения).
    ```javascript
   const test: Test = {
     name: NoEval.NAME,
     analyze: NoEval.analyze,
     shouldPerform: true
   }
    ```
4. Создать класс и реализовать функцию analyze для своей уязвимости.
    * Входные данные: AST - синтаксическое дерево, полученное в результате парсинга исходного кода анализируемого файла;
    * Тело функции: Анализ и поиск соответствующего паттерна по AST;
    * Выходные данные: Отчет.
    ```javascript
       export class NoEval {
         static NAME = 'no-eval';
       
         static analyze(ast): string[] {
           const result = getResult(ast); // todo - реализовать функцию getResult
       
           return result.map(line => {
             return `WARNING: Use of eval in row "${line}". Recommendations: https://help.semmle.com/wiki/display/JS/Use+of+eval`;
           });
         }
       }
    ```
5. Завести issue.
6. Создать pull request.