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
//5
//Сортировать в обратном порядке
//Как отсортировать массив чисел в обратном порядке?

const arr1 = [5, 2, 1, 1, -10, 8];
//alert( arr ); // 8, 5, 2, 1, -10
arr1.sort( (a, b) =>  (a < b)?  1: -1)
console.log(arr1);

//6
// Скопировать и отсортировать массив
// Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
// Исходный массив не должен меняться.

const arr2 = ["HTML", "JavaScript", "CSS"];
const arrSorted = [...arr2].sort();

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr2 ); // HTML, JavaScript, CSS (без изменений)

//7
//Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr3 = [1, 2, 3, 4, 5];

arr3.sort((a, b) => {
  let randomNumber = Math.round(Math.random());
  if(randomNumber === 1) {
    return 1
  } 
});

console.log( arr3 ); // элементы в случайном порядке, например [3,5,1,2,4]

//8
//Сортировка объектов
//Напишите код, который отсортирует массив объектов people по полю age.

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
function objSortAge(a) {
  return a.sort((a, b) => {
    return a.age > b.age? 1 : -1
  });  
}
console.log(objSortAge(people))
// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6
//Выведите список имён в массиве после сортировки.

//8

