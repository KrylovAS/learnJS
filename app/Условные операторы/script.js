'use strict';

//Выведется ли alert?

if ("0") {
  alert( 'Привет' );
}



// Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».
// Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».
var question = prompt('Каково «официальное» название JavaScript?');
if(question === 'ECMAScript') {
  console.log('Верно!')
}else {
  console.log('Не знаете? «ECMAScript»!')
}


//Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.

var number = prompt('Введите число');

if(+number > 0) {
  console.log('1');
}else if(+number < 0) {
  console.log('-1');
}else {
  console.log('0');
}


// Напишите код, который будет спрашивать логин (prompt).
// Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».
// Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».

var login = prompt('Введите логин')

if(login === 'Админ') {
  var password = prompt('Введите пароль')
  if(password === 'Чёрный Властелин'){
    console.log('Добро пожаловать!')
  }else if(!password){    
    console.log('Вход отменён');
  }else {
    console.log('Пароль неверен');
  }
}else if (!login) {
  console.log('Вход отменен');
}else {
  console.log('Я вас не знаю');
}



//Перепишите if с использованием оператора '?':

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

(a + b < 4) ? result = 'Мало': result = 'Много';


//Перепишите if..else с использованием нескольких операторов '?'.

var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
var message;
var login = prompt();

(login == 'Вася' || login == 'Директор' || login == '' )? (login == 'Вася' || login == 'Директор')?(login == 'Вася')?message = 'Привет':message = 'Здравствуйте' :message = 'Нет логина' : message = '';