// Функция, которая высчитывает сумму всех элементов массива,
// которые делятся без остатка на 3 (три).

const calculateSum = (coll) => {
  let sum = 0;
  for (let i = 0; i < coll.length; i += 1) {
    const value = coll[i];
    if (value % 3 === 0) {
      sum += value;
    }
  }

  return sum;
};

const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(coll1)); // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4];
console.log(calculateSum(coll2)); // 27
