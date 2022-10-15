// Фун извлекает из массива элемент по указанному индексу, если индекс существует,
// либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:
// - Массив
// - Индекс
// - Значение по умолчанию (равно `null`)

const get = (arr, index, defaultValue = null) => {
  if (index >= arr.length || index < 0) {
    return defaultValue;
  }

  return arr[index];
};

const cities = ["moscow", "london", "berlin", "porto"];

console.log(get(cities, 1)); // 'london'
console.log(get(cities, 4)); // null
console.log(get(cities, 10, "paris")); // 'paris'
console.log(get(cities, -1, "oops")); // 'oops'
