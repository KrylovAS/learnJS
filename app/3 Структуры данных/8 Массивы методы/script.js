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
  let s = str.split('-');
  //let z =
  for (let i = 1; i < s.length; i++) {
    console.log(s[i].replace(charAt(0), charAt(0).toUpperCase()));
  }

  //console.log(s)
}
//mm
//[ 'list', 'style', 'image' ]
