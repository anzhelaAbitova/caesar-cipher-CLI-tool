# Task 1. Caesar cipher CLI tool

## Пожалуйста, проверьте эту работу после вечера вторника 11.05.21, со штрафами и всем. Извините и спасибо.

**Task link: [Task 1. Caesar cipher CLI tool](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/caesar-cipher-cli-tool.md)**.

## Init project
1. Clone or download this repository
2. Open app folder
3. Run `npm install` or `npm i` to download dependencies

## Usage
1. Open app folder
2. Type the command `node index.js [options]` or `node index.js [options]`, where `[options]`:  

| Option \(short\) | Option \(full\) | Description                              | Required |
|------------------|-----------------|------------------------------------------|----------|
| \-s              | \-\-short       | only integer shift value                 | yes      |
| \-i              | \-\-input       | input file option \(if none \- STDIN\)   | no       |
| \-o              | \-\-output      | output file option \(if none \- STDOUT\) | no       |
| \-a              | \-\-action      | actions: encode / decode                 | yes      |
| \-h              | \-\-help        | display help                             | no       |  

## Examples  
If you use default input and output files and you stay in the root folder application:  
1. `node cipher/index.js -s 1 -a encode` or `node cipher/index.js --shift 1 --action encode` - encode (used stdin and stdout)
2. `node cipher/index -s 1 -a encode` or `node cipher/index --shift 1 --action encode` - encode (used stdin and stdout)  
3. `node cipher/index.js -s 1 -a decode` or `node cipher/index.js --shift 1 --action decode` - decode (used stdin and stdout) 
4. `node cipher/index -s 1 -a decode` or `node cipher/index --shift 1 --action decode` - decode (used stdin and stdout)  
5. `node cipher/index.js -s 1 -a encode -i "./cipher/input.txt"` or `node cipher/index.js --shift 1 --action encode --input "./cipher/input.txt"` - encode (used input.txt and stdout)  
6. `node cipher/index -s 1 -a encode -i "./cipher/input.txt"` or `node cipher/index --shift 1 --action encode --input "./cipher/input.txt"` - encode (used input.txt and stdout)  
7. `node cipher/index.js -s 1 -a decode --input "./cipher/input.txt"` or `node cipher/index.js --shift 1 --action decode --input "./cipher/input.txt"` - decode (used input.txt and stdout)  
8. `node cipher/index -s 1 -a decode --input "./cipher/input.txt"` or `node cipher/index --shift 1 --action decode --input "./cipher/input.txt"` - decode (used input.txt and stdout)  
9. `node cipher/index.js -s 1 -a encode -i "./cipher/input.txt" -o "./cipher/output.txt"` or `node cipher/index.js --shift 1 --action encode --input "./cipher/input.txt" --output "./cipher/output.txt"` - encode (used input.txt and output.txt)  
10. `node cipher/index -s 1 -a encode -i "./cipher/input.txt" -o "./cipher/output.txt"` or `node cipher/index --shift 1 --action encode --input "./cipher/input.txt" --output "./cipher/output.txt"` - encode (used input.txt and output.txt)  
11. `node cipher/index.js -s 1 -a decode -i "./cipher/input.txt" -o "./cipher/output.txt"` or `node cipher/index.js --shift 1 --action decode --input "./cipher/input.txt" --output "./cipher/output.txt"` - decode (used input.txt and output.txt)  
12. `node cipher/index -s 1 -a decode -i "./cipher/input.txt" -o "./cipher/output.txt"` or `node cipher/index --shift 1 --action decode --input "./cipher/input.txt" --output "./cipher/output.txt"` - decode (used input.txt and output.txt)  

## Cross-check  
Каждый пункт **10 баллов**, частичная реализация пункта **5 баллов**.  
Каждый коммит после дедлайна (за исключением коммитов в README.md) **минус 10 баллов**  

- [x] в корне репозитория создана папка с произвольным названием (например caesar-cipher-cli, task1 и т.п.), в которой расположены файлы с кодом программы  
- [x] в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению  
- [x] если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются  
- [x] если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0  
- [x] если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0  
- [ ] если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin  
- [ ] если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout  
- [x] шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются  
- [ ] если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст  
- [x] кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.)  

## 60(-10 штраф за коммиты после дедлайна)/100