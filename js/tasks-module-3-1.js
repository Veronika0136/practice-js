// Прості задачі
// Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

// function getItem(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }

//   return array;
// }

// console.log(getItem(['a', 'd', 'f']));

// Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.

// function getItem(array) {
//   for (let i = 1; i < array.length; i++) {
//     if (i % 2 === 0) {
//       console.log(array[i]);
//     }
//   }
//   return array;
// }

// console.log(getItem(['a', 'd', 'f', 'gg', 'rtre']));

// Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.

// function checkNumbers(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       console.log(array[i]);
//     }
//   }
//   return array;
// }

// console.log(checkNumbers([2, 5, 4, 6, 8, 1, 3]));

// Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// function checkNumbers(arr, max) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       console.log(arr[i]);
//     }
//   }
//   return arr;
// }

// console.log(checkNumbers([3, 7, 19, 43, 22, 12, 6], 10));

// Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// function calculetTotal(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }

//   return total;
// }

// console.log(calculetTotal([2, 5, 15, 1, 3]));

// Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.

// function checkSearch(arr, elem) {
//   let x = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === elem) {
//       x += 1;
//     }
//   }

//   return x;
// }

// console.log(checkSearch([5, 12, 5, 34, 5, 7, 45, 5, 17, 38, 5], 5));

// Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.

// function changeArray(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// console.log(changeArray([2, 0, -5, 45, -12, 15]));

// Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо довжина рядочку менша за 6
// до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.

// function changeLetters(arr) {
//   let arr2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < 6) {
//       arr2.push(arr[i].toLowerCase());
//     } else {
//       arr2.push(arr[i].toUpperCase());
//     }
//   }
//   return arr2;
// }
// console.log(changeLetters(['asdgregha', 'sfeffe', 'dfgaegrb', 'fewgf', 'aesfwawgg']));

// Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.

// function changeNumbers(array) {
//   let array2 = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       array2.push(array[i]);
//     }
//   }
//   return array2;
// }

// console.log(changeNumbers([2, 3, 4, 5, 6, 1, 11, 15, 8]));

// Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на індекс, за яким воно знаходиться в масиві.

// function calculateNumbers(arr) {
//   let arr2 = [];
//   let x = 0;

//   for (let i = 0; i < arr.length; i++) {
//     x = arr.indexOf(arr[i]);
//     arr2.push(arr[i] * x);
//   }

//   return arr2;
// }

// console.log(calculateNumbers([1, 2, 3, 4, 5]));

// Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3.

// function changeNumbers(array) {
//   let array2 = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//       array2.push(array[i]);
//     }
//   }
//   return array2;
// }

// console.log(changeNumbers([2, 3, 4, 5, 9, 6, 12, 11, 15, 8]));

// Середні задачі
// Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

// function searchSame(arr1, arr2) {
//   let arr3 = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1.includes(arr2[i])) {
//       arr3.push(arr2[i]);
//     }
//   }

//   return arr3;
// }

// console.log(searchSame([1, 2, 4, 5, 7], [1, 2, 3, 4, 5, 6]));

// Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function searchSame(arr1, arr2) {
//   let arr3 = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       arr3.push(arr1[i]);
//     }
//   }

//   return arr3;
// }

// console.log(searchSame([1, 2, 4, 5, 7], [1, 2, 3, 4, 5, 6]));
// console.log(searchSame([1, 12, 4, 5, 7, 9, 15], [1, 2, 3, 4, 5, 6]));

// Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// function searchMinElement(arr) {
//   return Math.min(...arr);
// }
// console.log(searchMinElement([12, 4, 5, 7, 9, 15]));

// Напиши функцію яка приймає масив та знаходить максимальний елемент.

// function searchMinElement(arr) {
//   return Math.max(...arr);
// }
// console.log(searchMinElement([12, 4, 5, 7, 9, 15]));

// Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.

// function changeArray(arr) {
//   let total = 0;
//   let arr1 = [];

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }

//   let avg = Math.round(total / arr.length);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > avg) {
//       arr1.push(arr[i]);
//     }
//   }

//   return arr1;
// }

// console.log(changeArray([12, 4, 5, 7, 9, 15]));

// Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.

// function changeArray(arr) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > i) {
//       arr1.push(arr[i]);
//     }
//   }

//   return arr1;
// }

// console.log(changeArray([1, 1, 3, 1, 1, 9, 12]));

// Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний елемент та видалити його з масиву.

// function changeArray(arr) {
//   let arr1 = [];
//   const x = Math.min(...arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== x) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1;
// }

// console.log(changeArray([76, 34, 45, 32, 57, 49, 73]));

// Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з діапазону але лише ті
// у яких не має цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5" у собі.

// function getNumbersWithoutFive(start, end) {
//   let result = [];

//   for (let i = start; i <= end; i++) {
//     if (!i.toString().includes('5')) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(getNumbersWithoutFive(5, 55));

// Складні
// Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.

// function changeNumbers(arr) {
//   let arr1 = [];
//   let arr2 = [];
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       arr1.push(arr[i]);
//     } else {
//       arr2.push(arr[i]);
//     }
//   }

//   res = arr1.concat(arr2);
//   return res;
// }

// console.log(changeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є сумою усіх попередніх елементів.

// function calculateNumbers(arr) {
//   let arr1 = [];
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     arr1.push(total);
//   }
//   return arr1;
// }

// console.log(calculateNumbers([1, 2, 3, 4, 5, 6, 7]));

// Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.
// Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.
// Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.
