// Функция, которая принимает на вход массив
// и располагает элементы исходного массива в обратном порядке.

reverse = (coll) => {
  const lastIndex = coll.length - 1;
  const middleIndex = lastIndex / 2;

  for (let i = 0; i < middleIndex; i += 1) {
    const mirrorIndex = lastIndex - i;
    const temp = coll[i];
    coll[i] = coll[mirrorIndex];
    coll[mirrorIndex] = temp;
  }
};

const names = ["john", "smith", "karl"];

reverse(names);
console.log(names); // => ['karl', 'smith', 'john']

reverse(names);
console.log(names); // => ['john', 'smith', 'karl']
