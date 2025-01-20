// // ОСНОВИ
// // Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.

// const person = {
//   name: 'Veronika',
//   age: 38,
//   profession: 'manager',
//   friend: {
//     name: 'Juliya',
//     age: 35,
//     job: 'SW',
//   },
// };

// // Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// console.log(person);

// // Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// person.age = 39;

// // Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.

// person.job = 'IT Company';

// // Видалення властивостей: Видаліть властивість професія з об'єкта person.

// delete person.profession;

// // Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

// console.log(person.profession);

// // Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості
// // об'єкта friend з об'єктом person.

// const friend = {
//   name: 'Juliya',
//   age: 35,
//   job: 'SW',
// };

// // Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

// console.log(`name - ${person.name}`);
// console.log(`age -${person.age}`);
// console.log(`job - ${person.job}`);
// console.log(`friend.name -${person.friend.name}`);
// console.log(`friend.age -${person.friend.age}`);
// console.log(`friend.job- ${person.friend.job}`);

// // Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

// person.greet = function () {
//   console.log(`Hello! My name is ${person.name}`);
// };

// person.greet();

// // Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().

// const arr = Object.keys(person);
// console.log(arr);

// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.

// function getObject(name, age) {
//   const obj = {
//     name: name,
//     age: age,
//   };
//   return obj;
// }

// console.log(getObject('Veronika', 38));

// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.

// const obj = {
//   name: 'Veronika',
//   age: 38,
// };

// function foo(obj) {
//   (obj.address = 'Veca Bikernieru'), console.log(obj);
// }

// foo(obj);

// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.

// const obj = {
//   name: 'Veronika',
//   age: 38,
// };

// function changeAge(obj, a) {
//   obj.age = a;
//   return obj;
// }

// console.log(changeAge(obj, 39));

// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.

// const obj = {
//   name: 'Veronika',
//   age: 38,
// };

// function deleteAge(obj) {
//   delete obj.age;
//   return obj;
// }

// console.log(deleteAge(obj));

// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".

// const obj = {
//   name: 'Veronika',
//   age: 38,
// };

// function isName(obj) {
//   return obj.name;
// }

// console.log(isName(obj));

// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.

// const obj = {
//   name: 'Veronika',
//   age: 38,
//   address: 'Veca Bikernieku',
// };

// function chackAddress(obj) {
//   return 'address' in obj;
// }

// console.log(chackAddress(obj));

// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат

// const obj1 = {
//   name: 'Veronika',
//   age: 38,
//   address: 'Veca Bikernieku',
// };

// const obj2 = {
//   name: 'Juliya',
//   age: 35,
//   job: 'SW',
// };

// function addObj(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// console.log(addObj(obj1, obj2));

// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.

// const obj1 = {
//   name: 'Veronika',
//   age: 38,
//   address: 'Veca Bikernieku',
// };

// function checkKeys(name = 'Unknown', age = 0, address) {
//   return {
//     name: name,
//     age: age,
//     address: address,
//   };
// }

// console.log(checkKeys());

// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку.
// Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.

// const obj1 = {
//   name: 'Veronika',
//   age: 38,
//   address: 'Veca Bikernieku',
// };

// function changeValues(obj, newName, newAge) {
//   obj.name = newName;
//   obj.age = newAge;

//   return obj;
// }

// console.log(changeValues(obj1, 'Aliona', 9));

// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.

// const obj1 = {
//   name: 'Veronika',
//   age: 38,
//   address: 'Veca Bikernieku',
// };

// function addEmailToObject(obj, newEmail) {
//   if (!obj.hasOwnProperty('email')) {
//     obj.email = newEmail;
//   }
//   return obj;
// }
// console.log(addEmailToObject(obj1));

// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.

// const obj1 = {
//   name: 'Veronika',
//   age: 38,
//   address: 'Veca Bikernieku',
// };

// function changeAge(obj) {
//   obj.age = obj.age.toString();

//   return obj;
// }

// console.log(changeAge(obj1));

// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.

// const obj1 = {
//   name: 'Veronika',
//   age: 38,
//   address: 'Veca Bikernieku',
// };

// function changeAddress(obj) {
//   if (obj.hasOwnProperty('address')) {
//     obj.address = 'new address';
//   }
//   return obj;
// }

// console.log(changeAddress(obj1));

// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity.
// Та повертає рядок "User {імя користувача} from {місто користувача}!"

// const obj3 = {
//     name: "Aliona",
//     city: "Riga",
// };

// function getStr(obj){
//     return `User ${obj.name} from ${obj.city}`;
// }

// console.log(getStr(obj3));


// Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25],
// ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.

const arr = [["name", "John"], ["age", 25],
["address", "123 Street"]];

function getObject(arr){

}

// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1.
// Поверни оновлений масив об'єктів.

// Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.

// Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра.
// Об'єкт повинен приймати довжини двох сторін під час створення.

// Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань,
// позначки задачі як виконаної та виведення списку завдань.

// Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу.
//  Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).

//  Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг,
//  пошуку книг за автором та ISBN, а також виведення списку всіх книг.

//  Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.

//  Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для додавання товарів,
//  підрахунку загальної вартості та виведення списку товарів.

//  Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів)
//   та методами для додавання та видалення друзів, а також виведення списку друзів.

//   Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень,
//   відтворення, паузи та перемикання між піснями.

//   Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок,
//   а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок,
//   зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.

//   Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail, що параметром приймає рядок і перевіряє,
//   чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, об'єкт буде мати такі методи:
//    метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону.
