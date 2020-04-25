## AST Static Analyzer

Разработанный статический анализатор является инструментом для идентификации и составления отчетов по шаблонам, найденным в коде ECMAScript / JavaScript.

####Руководство по разработке собственного плагина

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
3. Добавить в tests/tests.ts непосредственно свой тест в формате:
    * Name: __Название вашего теста__.NAME,
    * Analyze: __Название вашего теста__.analyze,
    * shouldPerform: true (включен по умолчанию)
4. Написать функцию analyze для своей уязвимости.
Структура этой функции включает в себя 3 основных этапа:
    1. Парсинг кода в дерево;
    2. Анализ дерева;
    3. Составление отчета.
5. Создать pull request.