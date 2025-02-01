const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      genre: 'Fiction',
      price: 10.99,
      rating: 4.9,
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      genre: 'Dystopian',
      price: 8.99,
      rating: 4.8,
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      genre: 'Classic',
      price: 7.99,
      rating: 4.7,
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year: 1951,
      genre: 'Fiction',
      price: 6.99,
      rating: 4.6,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      genre: 'Romance',
      price: 5.99,
      rating: 4.9,
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
      genre: 'Fantasy',
      price: 12.99,
      rating: 4.8,
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      year: 1851,
      genre: 'Adventure',
      price: 9.99,
      rating: 4.5,
    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      year: 1869,
      genre: 'Historical',
      price: 14.99,
      rating: 4.9,
    },
    {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      year: 1866,
      genre: 'Philosophical',
      price: 11.99,
      rating: 4.8,
    },
    {
      title: 'The Brothers Karamazov',
      author: 'Fyodor Dostoevsky',
      year: 1880,
      genre: 'Philosophical',
      price: 13.99,
      rating: 4.9,
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      year: 1932,
      genre: 'Dystopian',
      price: 9.99,
      rating: 4.7,
    },
    {
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      year: 1847,
      genre: 'Romance',
      price: 7.99,
      rating: 4.8,
    },
    {
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
      year: 1847,
      genre: 'Romance',
      price: 8.99,
      rating: 4.7,
    },
    {
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      year: 1890,
      genre: 'Gothic',
      price: 6.99,
      rating: 4.6,
    },
    {
      title: 'Frankenstein',
      author: 'Mary Shelley',
      year: 1818,
      genre: 'Science Fiction',
      price: 7.99,
      rating: 4.7,
    },
    {
      title: 'Dracula',
      author: 'Bram Stoker',
      year: 1897,
      genre: 'Horror',
      price: 6.99,
      rating: 4.5,
    },
    {
      title: 'The Odyssey',
      author: 'Homer',
      year: -800,
      genre: 'Epic',
      price: 10.99,
      rating: 4.9,
    },
    {
      title: 'The Iliad',
      author: 'Homer',
      year: -750,
      genre: 'Epic',
      price: 9.99,
      rating: 4.8,
    },
    {
      title: 'Les Misérables',
      author: 'Victor Hugo',
      year: 1862,
      genre: 'Historical',
      price: 11.99,
      rating: 4.9,
    },
    {
      title: 'The Count of Monte Cristo',
      author: 'Alexandre Dumas',
      year: 1844,
      genre: 'Adventure',
      price: 12.99,
      rating: 4.9,
    },
    {
      title: 'The Grapes of Wrath',
      author: 'John Steinbeck',
      year: 1939,
      genre: 'Fiction',
      price: 8.99,
      rating: 4.7,
    },
    {
      title: 'Of Mice and Men',
      author: 'John Steinbeck',
      year: 1937,
      genre: 'Fiction',
      price: 7.99,
      rating: 4.6,
    },
    {
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      year: 1859,
      genre: 'Historical',
      price: 9.99,
      rating: 4.8,
    },
    {
      title: 'Great Expectations',
      author: 'Charles Dickens',
      year: 1861,
      genre: 'Fiction',
      price: 8.99,
      rating: 4.7,
    },
    {
      title: 'The Secret Garden',
      author: 'Frances Hodgson Burnett',
      year: 1911,
      genre: 'Children',
      price: 6.99,
      rating: 4.7,
    },
    {
      title: 'Little Women',
      author: 'Louisa May Alcott',
      year: 1868,
      genre: 'Fiction',
      price: 7.99,
      rating: 4.8,
    },
    {
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      year: 1877,
      genre: 'Romance',
      price: 10.99,
      rating: 4.9,
    },
    {
      title: 'The Adventures of Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      year: 1892,
      genre: 'Mystery',
      price: 9.99,
      rating: 4.8,
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      year: 1954,
      genre: 'Fantasy',
      price: 20.99,
      rating: 4.9,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      year: 1997,
      genre: 'Fantasy',
      price: 10.99,
      rating: 4.8,
    },
  ];

// Знайти всі книги жанру 'Fantasy'.
// Знайти всі книги, видані після 2000 року.
// Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.
// Знайти всі книги з ціною меншою ніж 10 доларів.
// Знайти всі книги з рейтингом 4.8 і вище.
// Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.
// Знайти всі книги, видані до 1900 року.
// Знайти всі книги, що містять слово 'and' у назві.
// Знайти всі книги, автором яких є 'J.R.R. Tolkien'.
// Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.
// Знайти першу книгу жанру 'Fantasy'.
// Знайти першу книгу, видану після 2000 року.
// Знайти першу книгу, автором якої є 'Fyodor Dostoevsky'.
// Знайти першу книгу з ціною меншою ніж 10 доларів.
// Знайти першу книгу з рейтингом 4.8 і вище.
// Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.
// Знайти першу книгу, видану до 1900 року.
// Знайти першу книгу, що містить слово 'and' у назві.
// Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.
// Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.
// Чи є в масиві хоча б одна книга жанру 'Fantasy'?
// Чи є в масиві хоча б одна книга, видана після 2000 року?
// Чи є в масиві хоча б одна книга, автором якої є 'Fyodor Dostoevsky'?
// Чи є в масиві хоча б одна книга з ціною меншою ніж 10 доларів?
// Чи є в масиві хоча б одна книга з рейтингом 4.8 і вище?
// Чи є в масиві хоча б одна книга жанру 'Romance' з ціною меншою ніж 8 доларів?
// Чи є в масиві хоча б одна книга, видана до 1900 року?
// Чи є в масиві хоча б одна книга, що містить слово 'and' у назві?
// Чи є в масиві хоча б одна книга, автором якої є 'J.R.R. Tolkien'?
// Чи є в масиві хоча б одна книга жанру 'Historical' з рейтингом вище 4.7?
// Чи всі книги в масиві мають рейтинг 4.5 і вище?
// Чи всі книги в масиві коштують менше 20 доларів?
// Чи всі книги в масиві видані після 1950 року?
// Чи всі книги в масиві є жанру 'Fiction'?
// Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?
// Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?
// Чи всі книги в масиві видані до 2000 року?
// Чи всі книги в масиві мають слово 'the' у назві?
// Чи всі книги в масиві мають рейтинг вище 4.0?
// Чи всі книги в масиві є жанру 'Adventure'?
// Отримати масив назв всіх книжок.
// Отримати масив авторів всіх книжок.
// Створити масив об'єктів, які містять лише назву та автора кожної книжки.
// Створити масив цін всіх книжок з подвоєною вартістю.
// Створити масив років видання всіх книжок з доданими 5 роками до кожного.
// Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках (помножений на 10).
// Створити масив об'єктів, де назва книжки буде в верхньому регістрі.
// Створити масив рядків, що містять інформацію про кожну книжку в форматі "назва - автор".
// Створити масив об'єктів, де кожна книжка буде мати нове поле discountPrice, що дорівнює ціні зі знижкою 10%.
// Створити масив об'єктів, що містять назву книжки та її ціну з доданим податком 15%.
// Створити масив назв книжок, які видані після 2000 року.
// Створити масив об'єктів, де кожна книжка буде мати нове поле isClassic, що дорівнює true, якщо книжка видана до 1950 року.
// Отримати масив жанрів всіх книжок у верхньому регістрі.
// Створити масив назв книжок, де всі слова в назві починаються з великої літери.
// Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.
// Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар = 0.85 євро).
// Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".
// Створити масив об'єктів, де кожна книжка буде мати нове поле shortTitle, що містить тільки перше слово з назви.
// Створити масив об'єктів, де кожна книжка буде мати нове поле description, що містить рядок "Ця книга від автора [author] була видана у [year] році".
// Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр записаний у нижньому регістрі.
// Відсортувати книги за роком видання від найдавнішого до найновішого.
// Відсортувати книги за ціною від найнижчої до найвищої.
// Відсортувати книги за рейтингом від найнижчого до найвищого.
// Відсортувати книги за назвою у алфавітному порядку (від А до Я).
// Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).
// Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за назвою у зворотньому алфавітному порядку.
// Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою назвою за автором у зворотньому алфавітному порядку.
// Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше 10 доларів, потім решту.
// Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають рейтинг 4.8 і вище, потім решту.
// Відсортувати книги спочатку за жанром, а потім за роком видання.
// Отримати всі книги, видані після 2000 року та відсортувати їх за рейтингом від найвищого до найнижчого, повернути лише назви.
// Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за роком видання від найдавнішого до найновішого та вивести перші 5 книг.
// Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною від найнижчої до найвищої та вивести назви книг.
// Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у зворотньому алфавітному порядку та вивести авторів унікальних книг.
// Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та відсортувати їх за рейтингом від найвищого до найнижчого.
// Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від найвищого до найнижчого та вивести першу книгу.
// Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останню книгу.
// Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за рейтингом від найвищого до найнижчого та вивести середній рейтинг.
// Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останні 3 книги.

const cars = [
    {
      brand: 'Toyota',
      model: 'Camry',
      year: 2019,
      color: 'Silver',
      price: 25000,
      amount: 3,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Honda',
      model: 'Accord',
      year: 2020,
      color: 'White',
      price: 28000,
      amount: 5,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Ford',
      model: 'Mustang',
      year: 2021,
      color: 'Red',
      price: 50000,
      amount: 2,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2018,
      color: 'Black',
      price: 45000,
      amount: 1,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'BMW',
      model: 'M5',
      year: 2022,
      color: 'Blue',
      price: 70000,
      amount: 2,
      isSportCar: true,
      type: 'Sedan',
    },
    {
      brand: 'Mercedes-Benz',
      model: 'E-Class',
      year: 2020,
      color: 'Silver',
      price: 60000,
      amount: 3,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Audi',
      model: 'A4',
      year: 2021,
      color: 'Gray',
      price: 45000,
      amount: 0,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Lamborghini',
      model: 'Huracan',
      year: 2023,
      color: 'Yellow',
      price: 300000,
      amount: 1,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'Ferrari',
      model: '488 GTB',
      year: 2022,
      color: 'Red',
      price: 350000,
      amount: 1,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'Porsche',
      model: '911',
      year: 2021,
      color: 'White',
      price: 120000,
      amount: 2,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'Toyota',
      model: 'Golf',
      year: 2020,
      color: 'Black',
      price: 20000,
      amount: 6,
      isSportCar: false,
      type: 'Hatchback',
    },
    {
      brand: 'Subaru',
      model: 'Forester',
      year: 2021,
      color: 'Green',
      price: 30000,
      amount: 3,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Jeep',
      model: 'Wrangler',
      year: 2022,
      color: 'Orange',
      price: 35000,
      amount: 0,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Mazda',
      model: 'CX-5',
      year: 2020,
      color: 'Red',
      price: 28000,
      amount: 5,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Kia',
      model: 'Soul',
      year: 2021,
      color: 'Yellow',
      price: 20000,
      amount: 4,
      isSportCar: false,
      type: 'Hatchback',
    },
    {
      brand: 'Toyota',
      model: 'Tucson',
      year: 2022,
      color: 'White',
      price: 30000,
      amount: 3,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Nissan',
      model: 'Sentra',
      year: 2019,
      color: 'Silver',
      price: 22000,
      amount: 3,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Volvo',
      model: 'XC60',
      year: 2020,
      color: 'Blue',
      price: 40000,
      amount: 2,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Lexus',
      model: 'RX',
      year: 2021,
      color: 'Black',
      price: 50000,
      amount: 2,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Land Rover',
      model: 'Range Rover Evoque',
      year: 2022,
      color: 'Gray',
      price: 60000,
      amount: 0,
      isSportCar: false,
      type: 'SUV',
    },
  ];

// Знайти авто заданого кольору
// Знайти усі спорткари
// Знайти авто 2022 року
// Знайти авто певної марки
// Знайти авто дорожче заданої ціни
// Знайти авто заданого типу
// Знайти авто з кількістю більше ніж задане значення
// Знайти авто, випущені після 2018 року
// Знайти авто, випущені до 2015 року
// Знайти авто, ціна яких в межах від 20000 до 40000
// Знайти всі авто, які не є спортивними
// Знайти всі авто чорного кольору
// Знайти всі автомобілі марки 'BMW'
// Знайти всі авто типу 'SUV'
// Знайти всі авто, що мають ціну менше ніж 30000
// Знайти всі авто, що мають ціну більше ніж 50000
// Знайти всі авто, випущені після 2021 року
// Знайти всі авто марки 'Audi'
// Знайти всі авто, що мають кількість більше 2
// Знайти всі авто червоного кольору
// Знайти всі авто, які є седанами
// Знайти всі авто марки 'Mercedes'
// Знайти всі авто, які не є седанами
// Знайти всі авто, випущені в 2020 році
// Знайти всі авто марки 'Tesla'
// Знайти всі авто, що мають кількість менше 5
// Знайти всі авто, що мають ціну більше ніж 25000
// Знайти всі авто марки 'Lexus'
// Знайти всі авто, випущені до 2017 року
// Знайти всі авто білого кольору
// Знайти авто заданого кольору
// Знайти усі спорткари
// Порахувати кількість авто заданого року
// Знайти всі машини з ціною вище вказаної.
// Порахувати кількість машин вказаного року.
// Відсортувати машини за роком випуску (від найстарішого до найновішого).
// Знайти найдорожчу машину.
// Знайти всі машини заданої марки (наприклад, Toyota).
// Порахувати загальну кількість машин.
// Відсортувати машини за ціною (від найдешевшої до найдорожчої).
// Знайти всі машини певного типу (наприклад, SUV).
// Знайти всі машини певного кольору та року випуску.
// Порахувати середню ціну всіх машин.
// Знайти всі машини, у яких кількість на складі більша за 0.
// Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.
// Порахувати сумарну кількість всіх машин заданої марки.
// Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
// Знайти всі машини, які не є спортивними та доступні для продажу.
// Порахувати загальну вартість всіх машин складі.
// Знайти всі машини певного типу та кольору.
// Відсортувати машини за брендом та моделлю в алфавітному порядку.
// Перевірити, чи є хоч одна машина певного кольору.
// Перевірити, чи є хоч одна машина певного року.
// Перевірити, чи є всі авто є спроткарами.
// Перевірити, чи є всі новіші за вказаний рік.
// Створити новий масив, що містить лише назви моделей усіх машин.
// Створити масив, що містить розмітку кожної машини.
// Знайти індекс першої машини з роком випуску 2022 року.
// Сортувати за ціною
// Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.
// Створити новий масив, що містить лише моделі доступних для продажу машин.
// Знайти першу машину, яка не є спортивною та має кількість на на складі більше 0, потім повернути її колір.
// Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною менше 40 000.
// Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових і повернути масив тільки зі своїми моделями.
// Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди та моделі цих машин.
// Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише моделі цих машин та ціну.
// Повернути масив, що містить лише кольори доступних для прродажу машин, та зробити щоб колір не повторювався дівчі.
// Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.
// Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.
// Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70 000.
// Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин.


const users = [
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      age: 28,
      email: 'alice@gmail.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      age: 42,
      email: 'bob@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Eva',
      lastName: 'Williams',
      age: 35,
      email: 'eva@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'David',
      lastName: 'Brown',
      age: 22,
      email: 'david@gmail.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Sophia',
      lastName: 'Davis',
      age: 29,
      email: 'sophia@gmail.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'Michael',
      lastName: 'Miller',
      age: 50,
      email: 'michael@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Olivia',
      lastName: 'Wilson',
      age: 19,
      email: 'olivia@gmail.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Daniel',
      lastName: 'Thompson',
      age: 31,
      email: 'daniel@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Ava',
      lastName: 'Harris',
      age: 27,
      email: 'ava@gmail.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'James',
      lastName: 'Jackson',
      age: 38,
      email: 'james@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Emma',
      lastName: 'Taylor',
      age: 23,
      email: 'emma@example.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'William',
      lastName: 'Anderson',
      age: 45,
      email: 'william@gmail.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Mia',
      lastName: 'Martin',
      age: 29,
      email: 'mia@poshta.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Joseph',
      lastName: 'Clark',
      age: 33,
      email: 'joseph@poshta.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Charlotte',
      lastName: 'Rodriguez',
      age: 26,
      email: 'charlotte@poshta.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'John',
      lastName: 'Lopez',
      age: 31,
      email: 'john@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Amelia',
      lastName: 'Lee',
      age: 20,
      email: 'amelia@example.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'Benjamin',
      lastName: 'Gonzalez',
      age: 40,
      email: 'benjamin@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Chloe',
      lastName: 'Hernandez',
      age: 24,
      email: 'chloe@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Daniel',
      lastName: 'Young',
      age: 37,
      email: 'daniel@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Olivia',
      lastName: 'Miller',
      age: 38,
      email: 'olivia@example.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'James',
      lastName: 'Jones',
      age: 29,
      email: 'james@poshta.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Sophia',
      lastName: 'Davis',
      age: 31,
      email: 'sophia@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'William',
      lastName: 'Wilson',
      age: 52,
      email: 'william@poshta.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Ava',
      lastName: 'Taylor',
      age: 19,
      email: 'ava@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Michael',
      lastName: 'Clark',
      age: 40,
      email: 'michael@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Emma',
      lastName: 'Lee',
      age: 27,
      email: 'emma@poshta.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'Daniel',
      lastName: 'Martinez',
      age: 35,
      email: 'daniel@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Isabella',
      lastName: 'Hernandez',
      age: 42,
      email: 'isabella@poshta.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'Liam',
      lastName: 'Garcia',
      age: 26,
      email: 'liam@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Mia',
      lastName: 'Rodriguez',
      age: 30,
      email: 'mia@poshta.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Noah',
      lastName: 'Lopez',
      age: 24,
      email: 'noah@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Charlotte',
      lastName: 'Perez',
      age: 29,
      email: 'charlotte@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Ethan',
      lastName: 'Turner',
      age: 37,
      email: 'ethan@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Amelia',
      lastName: 'White',
      age: 23,
      email: 'amelia@poshta.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Alexander',
      lastName: 'Jackson',
      age: 41,
      email: 'alexander@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Sofia',
      lastName: 'Brown',
      age: 33,
      email: 'sofia@example.com',
      isActive: true,
      gender: 'Female',
    },
  ];
  
  const users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
          lat: '29.4572',
          lng: '-164.2990',
        },
      },
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: {
        name: 'Robel-Corkery',
        catchPhrase: 'Multi-tiered zero tolerance productivity',
        bs: 'transition cutting-edge web services',
      },
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
        geo: {
          lat: '-31.8129',
          lng: '62.5342',
        },
      },
      phone: '(254)954-1289',
      website: 'demarco.info',
      company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution',
        bs: 'revolutionize end-to-end systems',
      },
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
        geo: {
          lat: '-71.4197',
          lng: '71.7478',
        },
      },
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      company: {
        name: 'Considine-Lockman',
        catchPhrase: 'Synchronised bottom-line interface',
        bs: 'e-enable innovative applications',
      },
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      address: {
        street: 'Rex Trail',
        suite: 'Suite 280',
        city: 'Howemouth',
        zipcode: '58804-1099',
        geo: {
          lat: '24.8918',
          lng: '21.8984',
        },
      },
      phone: '210.067.6132',
      website: 'elvis.io',
      company: {
        name: 'Johns Group',
        catchPhrase: 'Configurable multimedia task-force',
        bs: 'generate enterprise e-tailers',
      },
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      address: {
        street: 'Ellsworth Summit',
        suite: 'Suite 729',
        city: 'Aliyaview',
        zipcode: '45169',
        geo: {
          lat: '-14.3990',
          lng: '-120.7677',
        },
      },
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
      company: {
        name: 'Abernathy Group',
        catchPhrase: 'Implemented secondary concept',
        bs: 'e-enable extensible e-tailers',
      },
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      address: {
        street: 'Dayna Park',
        suite: 'Suite 449',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
        geo: {
          lat: '24.6463',
          lng: '-168.8889',
        },
      },
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      company: {
        name: 'Yost and Sons',
        catchPhrase: 'Switchable contextually-based project',
        bs: 'aggregate real-time technologies',
      },
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
          lat: '-38.2386',
          lng: '57.2232',
        },
      },
      phone: '024-648-3804',
      website: 'ambrose.net',
      company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
      },
    },
  ];

// Знайти користувачів віком від 25 до 40 років.
// Знайти всіх користувачів із активним статусом.
// Порахувати кількість користувачів молодше 30 років.
// Відсортувати користувачів віком від старшого до молодшого.
// Знайти користувачів з електронною поштою на домені gmail.com.
// Знайти всіх жінок серед користувачів.
// Порахувати кількість неактивних користувачів.
// Відсортувати користувачів на прізвище в алфавітному порядку.
// Знайти користувача з найбільшим віком.
// Перевірити, чи є хоча б один користувач із прізвищем "Johnson".
// Створити новий масив, який містить лише імена користувачів.
// Створити масив з інформацією про користувачів у форматі JSON.
// Знайти індекс першого користувача під назвою "Jane".
// Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.
// Порахувати загальну кількість користувачів.
// Знайти всіх користувачів з активним статусом та віком старше 25 років.
// Знайти користувачів із прізвищем, що починається на букву "S".
// Відсортувати користувачів за віком (від молодшого до старшого).
// Знайти всіх користувачів електронної пошти на домені yahoo.com.
// Знайти користувача з найменшим віком.
// Перевірити, чи є хоча б один користувач з ім'ям John.
// Створити новий масив, що містить лише прізвища користувачів.
// Створити масив з інформацією про користувачів як рядкових описів.
// Знайти індекс користувача з активним статусом і віком більшим або рівним 40 років.
