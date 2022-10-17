// Функция, которая принимает на вход в виде массива кошелёк с деньгами и название валюты
// и возвращает сумму денег указанной валюты.

//Реалиция через управляющие инструкции.

// Параметры функции:

// - Массив, содержащий купюры разных валют с различными номиналами
// - Наименование валюты

const getTotalAmount = (money, currency) => {
  let sum = 0;

  for (const bill of money) {
    const currentCurrency = bill.slice(0, 3);
    if (currentCurrency !== currency) {
      continue;
    }
    const denomination = Number(bill.slice(4));
    sum += denomination;
  }

  return sum;
};

const money1 = ["eur 10", "usd 1", "usd 10", "rub 50", "usd 5"];

console.log(getTotalAmount(money1, "usd")); // 16
