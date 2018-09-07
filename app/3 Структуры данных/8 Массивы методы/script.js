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
  let uppercaseWord = arrWord.map( (el)=> el.replace(el.charAt(0), el.charAt(0).toUpperCase()));
   let s = str.split('-');  
  
  return [firstWord, ...uppercaseWord].join('');  
  
}
 console.log(camelize("-webkit-transition"));

//3 //vvvv



//5
//Сортировать в обратном порядке

//Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, 11,-10, 8];

// отсортируйте?

//alert( arr ); // 8, 5, 2, 1, -10

arr.sort( (a, b) => {
  if (a > b) return 1
  if (a < b ) return -1
})

console.log(arr)