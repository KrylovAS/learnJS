'use strict';

// //Создайте страницу, которая предлагает ввести два числа и выводит их сумму.

const oneNumber = +prompt('введите первое число');
const twoNumber = +prompt('введите второе число');

function sum(a, b) {
  return a + b;
}

// alert(sum(oneNumber, twoNumber));

// //2
// //представьте себе электронный магазин. Цены даны с точностью до копейки(цента, евроцента и т.п.).

// // Вы пишете интерфейс для него. Основная работа происходит на сервере, но и на клиенте все должно быть хорошо. Сложение цен на купленные товары и умножение их на количество является обычной операцией.

// // Получится глупо, если при заказе двух товаров с ценами 0.10$ и 0.20$ человек получит общую стоимость 0.30000000000000004$:


// // Что можно сделать, чтобы избежать проблем с ошибками округления?

let productSum = 0.10 + 0.20

console.log(productSum.toFixed(2) + '$');


// //3
// //Этот цикл – бесконечный. Почему?

var i = 0;
while (i != 10) {
  i += 0.2;
} // при прибавлении дробного числа не получиться   =10