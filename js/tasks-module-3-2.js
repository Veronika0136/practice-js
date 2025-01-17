// Функції
// Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.

// function foo(a, b) {
//   const total = a + b;
//   return total;
// }

// console.log(foo(5, 4));

// Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з них.

// function foo(a, b, c) {
//   const res = Math.max(a, b, c);
//   return res;
// }

// console.log(foo(5, 15, 25));

// Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та повертає true, якщо число знаходиться між мінімумом
// і максимумом (включно), і false, якщо ні.

// function foo(x, min, max) {
//   if (x >= min && x <= max) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(foo(20, 5, 15));

// Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.

// function srearchLet(str) {
//   return str[0];
// }

// console.log(srearchLet('Veronika'));

// Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.

// function srearchLet(str) {
//   return str[str.length - 1];
// }

// console.log(srearchLet('Veronika'));

// Напиши функцію, яка приймає число і повертає true, якщо число парне, і false, якщо ні.

// function checkNumber(value) {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkNumber(6));

// Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то повернути null, в іншому випадку повернути добуток цих двох чисел.

// function foo(num1, num2) {
//   if (num1 === 0 || num2 === 0) {
//     return null;
//   } else {
//     return num1 * num2;
//   }
// }

// console.log(foo(2, 2));

// Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у тег div. Приклад: на вході був рядок "Hello world"
// а на виході рядок "<div>Hello world<div>"

// function addDiv(str){
//     return `<div>${str}<div>`;
// }

// console.log(addDiv("veronika"));

// Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова розділені пробілами).

// function calculateWord(str) {
//   const word = str.split(' ');
//   return word.length;
// }
// console.log(calculateWord('asf asfesdkg sdg df htrhrs'));

// Напиши функцію, яка приймає рядок і повертає його довжину помножену на кількість слів в цьому рядку.

// function calculateWord(str) {
//   const length = str.length;
//   console.log(length);

//   const word = str.split(' ');
//   console.log(word.length);

//   return length * word.length;
// }
// console.log(calculateWord('asf asfe sdkg asf'));

// Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому (a, e, i, o, u). Використовуйте метод includes та цикл.

// function calculateLetters(str) {
//   let total = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i].includes('a') ||
//       str[i].includes('e') ||
//       str[i].includes('i') ||
//       str[i].includes('o') ||
//       str[i].includes('u')
//     ) {
//       total += 1;
//     }
//   }

//   return total;
// }

// console.log(calculateLetters('Veronika'));

// Напиши функцію, яка приймає рядок і повертає новий рядок, де слова розташовані у зворотному порядку.

// function changeString(str) {
//   const arr = str.split(' ');

//   const arr1 = arr.toReversed();

//   const str1 = arr1.join(' ');
//   return str1;
// }
// console.log(changeString('Khrul Veronika Viktirivna'));

// Напиши функцію, яка приймає довільну кількість аргументів і повертає true, якщо всі аргументи є числами, і false, якщо ні.

// function foo() {
//   for (const element of arguments) {
//     if (typeof element !== 'number') {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(foo(1, 4, 6,  "fsf"));

// Напиши функцію, яка приймає довільну кількість аргументів і повертає їх об'єднаними в один рядок, розділений комами.

// function foo() {
//   const arr = Array.from(arguments);
//   return arr.join(',');
// }
// console.log(foo('gsd', 'sf', 'gafvfvf', 1));

// Напиши функцію, яка приймає довільну кількість чисел і повертає їхній добуток.

// function foo() {
//   let res = 1;
//   for (const element of arguments) {
//     res *= element;
//   }
//   return res;
// }

// console.log(foo(1, 5, 3, 2));

// Напиши функцію, яка приймає довільну кількість чисел і повертає кількість непарних чисел серед них.

// function foo() {
//   let calc = 0;
//   for (const element of arguments) {
//     if (element % 2 !== 0) {
//       calc += 1;
//     }
//   }
//   return calc;
// }

// console.log(foo(1, 3, 5, 8));

// Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок що є найдовшим.

// function findLongestString() {
//   let longest = '';

//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i].length > longest.length) {
//       longest = arguments[i];
//     }
//   }

//   return longest;
// }

// console.log(findLongestString('aaaaa', 'sdad', 'eeeeeee', 'dddddd'));

// Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один цілий рядок.

// function foo() {
//   const arr = Array.from(arguments);
//   return arr.join('');
// }
// console.log(foo('aaa', 'sssss', 'd', 'iii', 'jjjj'));
