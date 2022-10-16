// Функция, которая высчитывает среднее арифметическое элементов переданного массива

const calculateAverage = (coll) => {
  const itemsCount = coll.length;

  if (itemsCount === 0) {
    return null;
  }

  let sum = 0;
  for (const item of coll) {
    sum += item;
  }

  return sum / itemsCount;
};

const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
console.log(calculateAverage(temperatures1)); // 38.5

const temperatures2 = [36, 37.4, 39, 41, 36.6];
console.log(calculateAverage(temperatures2)); // 38
