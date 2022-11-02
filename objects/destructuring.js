// Реализуйте и экспортируйте по умолчанию функцию,
// которая принимает на вход список пользователей, извлекает их имена,
// сортирует в алфавитном порядке и возвращает отсортированный список имен.

const users = [
  { name: "Bronn", gender: "male", birthday: "1973-03-23" },
  { name: "Reigar", gender: "male", birthday: "1973-11-03" },
  { name: "Eiegon", gender: "male", birthday: "1963-11-03" },
  { name: "Sansa", gender: "female", birthday: "2012-11-03" },
];

const getSortedNames = (users) => {
    const names = [];
  
    for (const { name } of users) {
      names.push(name);
    }
  
    return names.sort();
  };

  console.log(getSortedNames(users)); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']);   