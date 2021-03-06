'use strict';

//Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос посредством вызова confirm
//и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

//else в данной конструкции лишний


//Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
//Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:

//Используя оператор '?'
//Используя оператор ||

function checkAge1(age){
 return  (age > 18)? true: console.log('Родители разрешили?')
}
function checkAge2(age){
  return  (age > 18) || console.log('Родители разрешили?')
 }
checkAge1(45)
checkAge2(12)


//Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

function min(a, b) {
  return (a > b)? a : b
}
//Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1


//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n){
  return x ** n
}

