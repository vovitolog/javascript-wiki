// Функция меняет местами первый и последний элемент массива.
// Если массив содержит меньше двух элементов, то он возвращается как есть.

const swap = (items) => {
  if (items.length < 2) {
    return items;
  }
  const lastIndex = items.length - 1;
  const last = items[lastIndex];
  items[lastIndex] = items[0];
  items[0] = last;

  return items;
};

console.log(swap(["one", "two", "three"])); // ['three', 'two', 'one'])
console.log(swap([1])); // [1]
console.log(swap([1, 2])); // [2, 1])
