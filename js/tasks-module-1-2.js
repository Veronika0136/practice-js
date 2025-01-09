///Задача-1
//Напишіть функцію яка приймає два параметри str1 та str2.
//Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2.
// В іншому випадку функція повинна повернути булеве значення false.

//function compareStr(str1, str2) {
//const letter1 = str1[0];
//console.log(letter1);
//const letter2 = str2[str2.length - 1];
//console.log(letter2);
//const result = letter1 === letter2;

//console.log(result);
//return result;
//}

///Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2.
//  В іншому випадку функція повинна повернути булеве значення false.

//function compareStr(str1, str2) {
//const letter1 = str1[0];
//console.log(letter1);
//const letter2 = str2[0];
//console.log(letter2);
//const result = letter1 === letter2;

//console.log(result);
//return result;
//}

//compareStr( "Volodya", "Aliona");

///Задача-3. Напишіть функцію яка приймає два параметри str1 та str2.
//  Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2.
// В іншому випадку функція повинна повернути булеве значення false.

//function compareStr(str1, str2) {
//const l1 = str1.length;
//console.log(l1);
//const l2 = str2.length;
//console.log(l2);
//const result = l1 === l2;

//console.log(result);
//return result;
//}

//compareStr( "Volodya", "Aliona");

///Задача-4.  Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна.
//  В іншому випадку функція повинна повернути булеве значення false.

//function compareNumb(num) {
//const newNum = num.toString().length;
//console.log(newNum);
//if (newNum % 2 === 0) {
//  return true;
//} else {
//  return false;
//}
//}

//console.log(compareNumb(212));

///Задача-5.Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2.
// В іншому випадку функція повинна повернути булеве значення false.

//function compareNumb(num1, num2) {
//  if (num1 > num2) {
//    return true;
//  } else {
//    return false;
//  }
//}
//console.log(compareNumb(1, 5));

///Задача-6.Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі.
// В іншому випадку функція повинна повернути булеве значення false.

//function compareNumb(num1, num2){
//    const newNum = num1/num2;
//    return Number.isInteger(newNum);}

//console.log(compareNumb(10, 3));

///Задача-7.Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є непарним числом.
// В іншому випадку функція повинна повернути булеве значення false.

//function compareNumb(num) {
//  if (num % 2 !== 0) {
//    return true;
//  } else {
//    return false;
//  }
//}

//console.log(compareNumb(21));

///Задача-8.Напишіть функцію, яка приймає параметр str.
// Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру.
//  В іншому випадку функція повинна повернути булеве значення false. Підказка: допоможе toLowerCase();

//function searchLet(str) {
//  if (str.match(/[A-Z]/)) {
//    return true;
//  } else {
//    return false;
//  }
//}
//console.log(searchLet('niKa'));

///Задача-9.Напишіть функцію, яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2.
// В іншому випадку функція повинна повернути булеве значення false.

//function compareLet(str1, str2){
//    if (str1.length > str2.length){
//        return true;
//    }else {
//        return false;
//    }
//}

//console.log(compareLet("Veronika", "Nika"))

///Задача-12.Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл.
//  В іншому випадку функція повинна повернути булеве значення false.

// function searchLet(str) {
//   if (str.match(/[ ]/)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(searchLet('niKa'));

///Задача-14.Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true, якщо str є паліндромом (однаковий у зворотному напрямку).
// В іншому випадку функція повинна повернути булеве значення false.Підказка: тут допоможе метод масиву reverse();
///????????????????????????????????????????????????????????????????????

///Задача-15.Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true,
//  якщо num1 менше або дорівнює num2. В іншому випадку функція повинна повернути булеве значення false.

// function compareNumb(num1, num2) {
//   if (num1 >= num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(compareNumb(2, 5));

///Задача-17.Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true,
// якщо перша літера str є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.

//function searchLet(str) {
//  const newStr = str.toLowerCase();
//  const letter1 = newStr[0];
//  switch (letter1) {
//    case 'a':
//      return true;
//    case 'e':
//      return true;
//    case 'i':
//      return true;
//    case 'o':
//      return true;
//    case 'u':
//      return true;
//
//    default:
//      return false;
//  }
//}

//console.log(searchLet('Iudsgkgd'));

///Задача-19.Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true,
// якщо num1 і num2 рівні. В іншому випадку функція повинна повернути булеве значення false.

// function compareNumb(num1, num2) {
//   if (num1 === num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(compareNumb(3, 3));

///Задача-20.Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true,
// якщо num більше або дорівнює нулю. В іншому випадку функція повинна повернути булеве значення false.

// function compareNumb(num) {
//   if (num >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(compareNumb(-3));

///Задача-21.Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true,
// якщо довжина str є парною. В іншому випадку функція повинна повернути булеве значення false.

// function compareLet(str){
//     const sumLet = str.length;
//     console.log(sumLet);
//     if (sumLet%2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log (compareLet("JGHkjhjnsufhsjf  fjdf"));

///Задача-22.Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true,
// якщо num1 ділиться на 2, а num2 не ділиться на 2. В іншому випадку функція повинна повернути булеве значення false.

// function compareNum(num1, num2) {
//   if (num1 % 2 === 0 && num2 % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(compareNum(4, 7));

///Задача-23.Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true,
// якщо num більше 100, але менше 200. В іншому випадку функція повинна повернути булеве значення false.

// function compareNum(num) {
//   if (num>100 && num <200) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(compareNum(194));

///Задача-24.Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true,
//  якщо str містить лише маленькі літери. В іншому випадку функція повинна повернути булеве значення false. Підказка: допоможе toLowerCase();

// function searchLet(str) {
//   return /^[a-z]+$/.test(str);
// }
// console.log(searchLet('ygjhghg'));

///Задача-25.Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true,
// якщо str1 є частиною str2. В іншому випадку функція повинна повернути булеве значення false.

///Задача-26.Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true,
// якщо num є негативним числом. В іншому випадку функція повинна повернути булеве значення false.

///Задача-27.Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true,
// якщо різниця між num1 та num2 більше 50. В іншому випадку функція повинна повернути булеве значення false.

///Задача-28.Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є нуль.
//  В іншому випадку функція повинна повернути булеве значення false.

///Задача-29.Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true,
// якщо остання літера str1 є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.

///Задача-30.Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є кратним 10.
// В іншому випадку функція повинна повернути булеве значення false.

///Task 1.Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9. const value = 27.5;

///Task 2. Яким буде результат виразів?

//console.log(5 > 4);
//console.log(10 >= '7');
//console.log('2' > '12');
//console.log('2' < '12');
//console.log('4' == 4);
//console.log('6' === 6);
//console.log('false' === false);
//console.log(1 == true);
//console.log(1 === true);
//console.log('0' == false);
//console.log('0' === false);
//console.log('Papaya' < 'papaya');
//console.log('Papaya' === 'papaya');
//console.log(undefined == null);
//console.log(undefined === null);

///Task 3.Напиши скрипт який переведе значення totalMinutes (кількість хвилин) рядок у форматі годин та хвилин HH:MM.
// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 70;

//const hours = Math.floor(totalMinutes / 60);
//const minutes = totalMinutes % 60;
//console.log(hours);
//console.log(minutes);

//const doubleDigitHours = String(hours).padStart(2, 0);
//const doubleDigitMinutes = String(minutes).padStart(2, 0);
//console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

///Task 4. Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue,
// якщо воно не дорівнює undefined або null. У в іншому випадку має надаватися значення defaultValue.
// Перевір роботу скрипта для сліпучих значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор "?"
//  (nullish coalescing operator).

//const incomingValue = 5;
//const defaultValue = 10;
//const value = incomingValue || defaultValue;
//console.log(value);
