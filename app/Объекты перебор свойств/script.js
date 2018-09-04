'use strict';
// Определите, пуст ли объект

// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

// Работать должно так:

// function isEmpty(obj) {
//   /* ваш код */
// }

// var schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "подъём";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let prop in obj) {
    if (prop !== 'undefiend') return true;
  }
  return false;
}

const schedule = {};

//console.log(isEmpty(schedule));

//2
// Сумма свойств
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// Например:

const salaries = {
  Вася: 100,
  Петя: 300,
  Даша: 250,
};

//... ваш код выведет 650
let sum = 0;
for (let prop in salaries) {
  sum += salaries[prop];
}

//console.log(sum);

//3

// Свойство с наибольшим значением
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».
// Например:
const salarie = {
  Вася: 100,
  Петя: 300,
  Катя: 300,
};

// ... ваш код выведет "Петя"

function max(obj) {
  let p = 0;
  let name;

  for (let prop in obj) {
    if (obj[prop] > p) {
      p = obj[prop];
      name = prop;
    }
  }

  if (name === undefined) {
    return 'Нет сотрудников';
  }
  return name;
}

//console.log(max(salarie));

//4

//Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
var menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

multiplyNumeric(menu);

// после вызова
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
//P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (isNumeric(obj[prop])) {
      obj[prop] *= 2;
    }
  }
}

console.log(menu);
