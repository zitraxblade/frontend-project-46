Вычислитель отличий
### Hexlet tests and linter status:
[![Actions Status](https://github.com/zitraxblade/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zitraxblade/frontend-project-46/actions)
```bash
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.

Возможности утилиты:

Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json
Минимальные требования:
Node.js последней версии
npm
make
Commander.js
Lodash
js-yaml
Установка:
make install

Запуск утилиты:
gendiff -h для вывода справки
gendiff filepath1 filepath2 для сравнения двух файлов с форматированием результата по умолчанию (stylish)
gendiff -f plain filepath1 filepath2 либо gendiff -f plain filepath1 filepath2 для сравнения двух файлов с форматированием результата в плоском текстовом формате (plain)
gendiff -f json filepath1 filepath2 либо gendiff -f json filepath1 filepath2 для сравнения двух файлов с форматированием результата в формате JSON
gendiff __fixtures__/file1.json __fixtures__/file2.json --format json
