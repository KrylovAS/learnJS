'use strict';
//1
//Добавить класс в строку
//В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu',
};
//Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
//P.S. Ваша функция не должна добавлять лишних пробелов.
addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

function addClass(obj, newClass) {
  let prop = Object.keys(obj).join('');
  let propCls = obj[prop].split(' ');

  if (!propCls.includes(newClass)) {
    propCls.push(newClass);
  }

  obj[prop] = propCls.join(' ');
}

//console.log( obj.className ); // "open menu new me"

//2
// Перевести текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть, дефисы удаляются, а все слова после них получают заглавную букву.

camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';
// Такая функция полезна при работе с CSS.
// P.S. Вам пригодятся методы строк charAt, split и toUpperCase.

function camelize(str) {
  let arrWord = str.split('-');
  let firstWord = arrWord.shift();
  let uppercaseWord = arrWord.map(el => el.replace(el.charAt(0), el.charAt(0).toUpperCase()));

  return [firstWord, ...uppercaseWord].join('');
}
console.log(camelize('list-style-image'));

//3
// Функция removeClass
// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu',
};
//Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

//removeClass(obj, 'open'); // obj.className='menu'
//removeClass(obj, 'blabla'); // без изменений (нет такого класса)
//P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
  className: 'my menu menu',
};
removeClass(obj, 'menu');
//alert(obj.className); // 'my'
// Лишних пробелов после функции образовываться не должно.

function removeClass(obj, cls) {
  let object = Object.keys(obj);
  let arr = obj[object].split(' ');

  while (arr.indexOf(cls) !== -1) {
    arr.splice(arr.indexOf(cls), 1);
  }

  obj[object] = arr.join(' ');
}

//console.log(obj);

//4
// Фильтрация массива "на месте"

// Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать.

const arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

//alert( arr ); // массив изменился: остались [3, 1]

function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(arr.indexOf(arr[i]), 1);
    }
  }
}

console.log(arr);
