Вычислитель отличий
### Hexlet tests and linter status:
[![Actions Status](https://github.com/zitraxblade/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zitraxblade/frontend-project-46/actions)
```bash
Проект "Вычислитель отличий"
Установка зависимостей: make install
Пример работы с json файлами с вложенными структурами, вывод в формате "plain"
<img width="569" height="252" alt="image" src="https://github.com/user-attachments/assets/73b9839a-0e67-4f5a-ab52-493da6b3bd2c" />
Пример работы рекурсивного сравнения:
<img width="794" height="550" alt="image" src="https://github.com/user-attachments/assets/c6a31ea3-b4c6-4692-92fd-2d25d76d8d94" />
Пример работы сравнение плоских файлов (yaml)
<img width="588" height="253" alt="image" src="https://github.com/user-attachments/assets/8bdfcb39-5cdd-44ac-b51f-5cbabbc0147c" />



gendiff filepath1 filepath2 для сравнения двух файлов с форматированием результата по умолчанию (stylish)
gendiff -f plain filepath1 filepath2 либо gendiff -f plain filepath1 filepath2 для сравнения двух файлов с форматированием результата в плоском текстовом формате (plain)
gendiff -f json filepath1 filepath2 либо gendiff -f json filepath1 filepath2 для сравнения двух файлов с форматированием результата в формате JSON
gendiff __fixtures__/file1.json __fixtures__/file2.json --format json
