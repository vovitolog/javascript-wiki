// Функция, которая принимает на вход массив
// и строковой префикс, и возвращает новый массив, в котором к каждому элементу
// исходного массива добавляется переданный префикс.
// Функция предназначена для работы со строковыми элементами.
// После префикса автоматически добавляется пробел.

const addPrefix = (coll, prefix) => {
  const result = [];

  for (let i = 0; i < coll.length; i += 1) {
    result[i] = `${prefix} ${coll[i]}`;
  }

  return result;
};

const names = ["john", "smith", "karl"];

const newNames = addPrefix(names, "Mr");

console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];

console.log(names); // Старый массив не меняется
// => ['john', 'smith', 'karl'];
