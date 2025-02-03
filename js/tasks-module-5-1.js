// Callback
// Сума чисел: Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна обчислити суму
// чисел у масиві та передати результат у колбек.

// function sumResult(total) {
//   console.log(`Сумма чисел в массиве ${total}`);
// }

// function sumArray(numbers, callback) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   callback(total);
// }

// sumArray([4, 7, 2, 4, 1], sumResult);

// Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна подвоїти
// кожне число в масиві та передати новий масив у колбек.

// function changeArr(arr) {
//   console.log(arr);
// }

// function doubleArray(numbers, callback) {
//   let arr1 = [];
//   for (const item of numbers) {
//     arr1.push(item * 2);
//   }
//   changeArr(arr1);
// }

// doubleArray([2, 3, 4, 5], changeArr);

// Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та
// колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек.

// function logNewArr(arr) {
//   console.log(`Відфільтрованній масив: ${arr}`);
// }

// function filterWords(words, condition, callback) {
//   let arr = [];
//   for (const word of words) {
//     if (word.includes(condition)) {
//       arr.push(word);
//     }
//   }
//   logNewArr(arr);
// }

// filterWords(['Veronika', 'Aliona', 'Liza', 'Oleg', 'Sergey'], 'e', logNewArr);

// Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна
// перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.

// function logNewArr(arr) {
//   console.log(`Відновлений масив: ${arr}`);
// }

// function capitalizeStrings(strings, callback) {
//   let arr = [];
//   for (const str of strings) {
//     arr.push(str[0].toUpperCase() + str.slice(1));
//   }
//   callback(arr);
// }

// capitalizeStrings(['sfas', 'sfag', 'gdsag'], logNewArr);

// Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати
//  числа в масиві за зростанням та передати відсортований масив у колбек.

// const sortNumbers = (numbers, callback) => {
//   numbers.sort((a, b) => a - b);
//   callback(numbers);
// };

// // Приклад виклику функції sortNumbers
// const numbers = [5, 3, 8, 1, 2];
// sortNumbers(numbers, sortedNumbers => {
//   console.log(sortedNumbers);
// });

// Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне
//  число в масиві та передати його в колбек.

// function maxNumb(number) {
//   console.log(`Максимальне число в масиві: ${number}`);
// }

// function findMax(numbers, callback) {
//   const number = Math.max(...numbers);
//   callback(number);
// }

// findMax([6, 90, 76, 143, 56, 33, 57], maxNumb);

// Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити,
//  чи всі числа в масиві парні, і передати результат перевірки колбек.
// function callback(a) {
//   console.log(`Чи всі чісла в масиві парні: ${a}`);
// }

// function checkEven(numbers, callback) {
//   const isAllEven = numbers.every(number => number % 2 === 0);
//   callback(isAllEven);
// }

// checkEven([1, 2, 4, 6, 8, 10], callback);

// Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек
// callback. Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.

// function logStr(str) {
//   console.log(`${str}`);
// }

// function concatStrings(strings, separator, callback) {
//   const str = strings.join(`${separator}`);
//   logStr(str);
// }

// concatStrings(['Hello', 'Veronika', 'Good', 'luck'], ' ', logStr);

// Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна
//  перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.

// function logNewArr(arr) {
//   console.log(arr);
// }

// function parseNumbers(strings, callback) {
//   let arr = strings.map(Number);

//   logNewArr(arr);
// }

// parseNumbers(['Ok', '10', '4'], logNewArr);

// Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна
// підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.

// function logCalcLett(a) {
//   console.log(`В цьому масиві ${a} символів`);
// }

// function countCharacters(strings, callback) {
//   let total = 0;
//   for (const str of strings) {
//     total += str.length;
//   }
//   logCalcLett(total);
// }

// countCharacters(['Veronika', 'Aliona', 'Olga', 'Liza'], logCalcLett);

// Успіхів у вирішенні цих завдань! Кожна з них дозволить вам практикуватися у використанні колбек функцій для обробки даних та керування потоком
// виконання.

// Example 1 - Коллбек функции
// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный
// идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль
// // Решение

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   const total = product.price * product.quantity;
//   console.log(total);
// }

// function createProduct(obj, callback) {
//   obj.id = Math.random();

//   callback(obj);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 2 - Коллбек функции
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции,
// а второй и третий - колбеки.

// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.

// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//       onError('Error: Withdraw amount exceeds transaction limit or account balance.');
//     } else {
//       onSuccess('Withdrawal successful!');
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//       onError('Error: Deposit amount exceeds transaction limit or is less than or equal to zero.');
//     } else {
//       onSuccess('Deposit successful!');
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 3 - Коллбек функции
// Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

// function each(array, callback) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(callback(array[i]));
//   }
//   return result;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// Example 4 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.
// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 5 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = message => console.log(`✅ Success! ${message}`);

// const handleError = message => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 6 - Инлайн стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// Example 7 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function logItems(items) {
//   console.log(items);
//   //   for (let i = 0; i < items.length; i += 1) {
//   //     console.log(`${i + 1} - ${items[i]}`);
//   //   }

//   items.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   nameList.forEach((name, i) => {
//     console.log(`${name}: ${phoneList[i]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// const calсulateAverage = (...args) => {
//   let total = 0;
//   args.forEach(i => {
//     total += i;
//   });
//   return total / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
