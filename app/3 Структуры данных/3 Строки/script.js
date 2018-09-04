//Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:

//ucFirst("вася") == "Вася";
//ucFirst("") == ""; // нет ошибок при пустой строке

//P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().

function ucFirst(name) {
  return (upper = name.replace(name.charAt(0), name.charAt(0).toUpperCase()));
}

//console.log(ucFirst("вася") == "Вася");
//console.log(ucFirst("") == "");

//2
//Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

//Функция должна быть нечувствительна к регистру:

function checkSpam(strValidate) {
  const test1 = 'viagra'.toUpperCase();

  const test2 = 'XXX'.toUpperCase();
  const str = strValidate.toUpperCase();

  if (str.indexOf(test1) !== -1 || str.indexOf(test2) !== -1) {
    return true;
  }

  return false;
}

console.log(checkSpam('buy ViAgRA now')); // == true
console.log(checkSpam('free xxxxx')); // == true
console.log(checkSpam('innocent rabbit')); // == false

//3

//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

//Результатом функции должна быть (при необходимости) усечённая строка.

//Например:

truncate('Вот, что мне хотелось бы сказать на эту тему:', 2); //= "Вот, что мне хоте..."

truncate('Всем привет!', 20); // = "Всем привет!"
//Эта функция имеет применение в жизни. Она используется, чтобы усекать слишком длинные темы сообщений.

//P.S. В кодировке Unicode существует специальный символ «троеточие»: … (HTML: &hellip;), но в этой задаче подразумеваются именно три точки подряд.

function truncate(str, length) {
  if (str.length > length) {
    return str.replace(str.slice(length), '...');
  }

  return str;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 29));
console.log(truncate('Всем привет!', 20));
console.log('\n');
//4

// Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.

const productPrice = '$120';

function extractCurrencyValue(str) {
  if (isNaN(parseInt(str))) {
    return (productValue = str.slice(1));
  }

  return str;
}

extractCurrencyValue(productPrice);
console.log('TCL: extractCurrencyValue(productPrice)', extractCurrencyValue(productPrice));
console.log('\n');
