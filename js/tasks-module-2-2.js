// Масиви та методи рядкочків
// Напиши цикл, який виведе на консоль числа від 1 до 10.

// const a = 1;
// const b = 10;

// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

// Напиши цикл, який виведе на консоль парні числа від 1 до 20.

// const a = 1;
// const b = 20;

// for (let i = a; i <= b; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.

// const a = 1;
// const b = 100;
// let total = 0;

// for (let i = a; i <= b; i++) {
//   total += i;
//   console.log(total);
// }

// Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до 10).

// const a = 1;
// const b = 10;
// let res;

// for (let i = a; i <= b; i++) {
//   res = i * 7;
//   console.log(` ${i} * 7 = ${res} `);
// }

// Напиши цикл, який обчислить факторіал числа, введеного користувачем (наприклад, факторіал числа 5: !5 = 1 * 2 * 3 * 4 * 5).

// const b = prompt(' number?');
// let res = 1;

// for (let i = 1; i <= b; i++) {
//   res *= i;
//   console.log(res);
// }

// Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"

// const x = 'Hello world';

// for (let i = 0; i <= x.length; i += 2) {
//   console.log(x[i]);
// }

// Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому порядку.

// const x = 'Hello world';

// for (let i = x.length - 1; i >= 0; i--) {
//   console.log(x[i]);
// }

// Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне пробіл.

// const x = 'Hello world';

// for (let i = 0; i <= x.length; i++) {
//   if (x[i] !== ' ') {
//     console.log(x[i]);
//   } else {
//     break;
//   }
// }

// Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// const word = 'JavaScript';

// for (let i = 0; i < word.length; i += 2) {
//   console.log(word[i]);
// }

// Напиши функцію, яка приймає рядок та повертає перевернутий рядок

// let message = 'Hello world';
// let reverseMessage = '';

// function changeString(message) {
//   for (let i = message.length - 1; i >= 0; i--) {
//     reverseMessage += message[i];
//   }
//   return reverseMessage;
// }
// console.log(changeString('Aliona'));

// Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у верхньому регістрі

// function changeString(str) {
//   let str1 = '';

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 !== 0) {
//       str1 += str[i].toUpperCase();
//     } else {
//       str1 += str[i];
//     }
//   }

//   return str1;
// }

// console.log(changeString('Veronika'));

// Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до рядочка str1 стільки разів скільки вказали у параметрі count.

// function getString(str1, str2, count) {
//   let res = str1;
//   for (let i = 0; i < count; i++) {
//     res += str2;
//   }
//   return res;
// }

// console.log(getString('kjhgkj', 'jhbj', 3));
