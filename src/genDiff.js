import fs from 'fs';
import path from 'path';

export const genDiff = (filepath1, filepath2) => {
  // Абсолютные пути
  const fullPath1 = path.resolve(process.cwd(), filepath1);
  const fullPath2 = path.resolve(process.cwd(), filepath2);

  // Читаем файлы
  const file1Content = fs.readFileSync(fullPath1, 'utf-8');
  const file2Content = fs.readFileSync(fullPath2, 'utf-8');

  // Парсим JSON
  const data1 = JSON.parse(file1Content);
  const data2 = JSON.parse(file2Content);

  // Простая логика: показываем разницу ключей
  const keys = Array.from(new Set([...Object.keys(data1), ...Object.keys(data2)]));
  const diff = keys.map(key => {
    if (!(key in data1)) return `${key} added with value ${data2[key]}`;
    if (!(key in data2)) return `${key} removed (was ${data1[key]})`;
    if (data1[key] !== data2[key]) return `${key} changed from ${data1[key]} to ${data2[key]}`;
    return `${key} unchanged`;
  });

  return diff.join('\n');
};