//  Функция, которая принимает на вход массив чисел и возвращает новый,
// состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива.

const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const result = [];
  const remainder = Math.abs(coll[0] % 2);

  for (const item of coll) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item);
    }
  }

  return result;
};

console.log(getSameParity([2, 2, 8])); // [2, 2, 8])
