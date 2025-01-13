// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. Якщо оцінка 90 і більше, поверніть "Відмінно",
// від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".

// let grade = prompt('Введіть свою оцінку від 1-100');

// function getLevel(grade) {
//   if (grade >= 90) {
//     return 'Відмінно';
//   } else if (grade >= 75 && grade <= 89) {
//     return 'Добре';
//   } else if (grade >= 50 && grade <= 74) {
//     return 'Задовільно';
//   } else if (grade < 50) {
//     return 'Незадовільно';
//   }
// }

// console.log(getLevel(grade));

//Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true,
// поверніть "Вихідний", в іншому випадку поверніть "Робочий день".

// function isDay(dayOfWeek, isHoliday) {
//   if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday' || dayOfWeek === isHoliday) {
//     return 'Вихідний';
//   } else {
//     return 'Робочий день';
//   }
// }

// console.log(isDay('Monday'));
// console.log(isDay('Thuresday'));
// console.log(isDay('Saturday'));
// console.log(isDay('isHoliday'));
// ???????????????????????????????????????????????????

// Задача-8
// Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400,
// поверніть "Високосний рік", в іншому випадку - "Звичайний рік".

// function isYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return 'Високосний рік';
//   } else {
//     return 'Звичайний рік';
//   }
// }

// console.log(isYear(2004));
// console.log(isYear(2024));
// console.log(isYear(1986));

// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг,
// поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".

// function checkInvitation(hasInvitation, isFriend){}

//Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток",
// якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".

// function checkAge(age) {
//   if (age < 12) {
//     return 'Дитина';
//   } else if (age > 12 && age < 18) {
//     return 'Підліток';
//   } else if (age > 18 && age < 60) {
//     return 'Дорослий';
//   } else {
//     return 'Пенсіонер';
//   }
// }

// console.log(checkAge(10));
// console.log(checkAge(17));
// console.log(checkAge(35));
// console.log(checkAge(65));
// console.log(checkAge(1));

//Задача-11
//Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора,
//поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".

// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня",
// якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".

// function checkPartDay(time, isWeekend) {
//   const isHoliday = 'Неділя';

//   if (time < 12 && isWeekend !== isHoliday) {
//     return 'Ранок буднього дня';
//   } else if (time > 12 && time < 18 && isWeekend === isHoliday) {
//     return 'День вихідного дня';
//   } else {
//     return 'Вечір';
//   }
// }

// console.log(checkPartDay(13, 'Субота'));
// console.log(checkPartDay(15, 'Неділя'));
// console.log(checkPartDay(10, 'Неділя'));
// console.log(checkPartDay(11, 'Понеділок'));

// Задача-14
//Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий).
// Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".

// function checkProduct(hasGlutenAllergy, containsGluten) {
//   if (hasGlutenAllergy && containsGluten) {
//     return 'Не можна їсти';
//   } else {
//     return 'Можна їсти';
//   }
// }

// console.log(checkProduct(true, true));
// console.log(checkProduct(true, false));

// Задача-51
// Напишіть функцію, яка приймає один параметр continent. Використовуючи switch, поверніть назву континенту або "Невідомий континент"
// в залежності від введеного значення. Наприклад, "Africa", "Europe", "Asia", "North America", "South America", "Antarctica",
// "Australia" - відомі континенти, інші випадки - "Невідомий континент".

// function checkContinent(continent) {
//   switch (continent) {
//     case 'Africa':
//       return 'Africa';
//     case 'Europe':
//       return 'Europe';
//     case 'Asia':
//       return 'Asia';
//     case 'North America':
//       return 'North America';
//     case 'South America':
//       return 'South America';
//     case 'Antarctica':
//       return 'Antarctica';
//     case 'Australia':
//       return 'Australia';

//     default:
//       return 'Невідомий континент';
//   }
// }

// console.log(checkContinent('Latvia'));
// console.log(checkContinent('Europe'));
