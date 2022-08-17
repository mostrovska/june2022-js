// 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone){
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
// }
// let users=[];
// let user1 = new User(1,'Olia','Ivanova','olyaa@gmail.com', 11791);
// let user2 = new User(2,'Ira','Petrova','iraa@gmail.com', 225792);
// let user3 = new User(3,'Oleh','Spepanov','olehh@gmail.com', 345733);
// let user4 = new User(4,'Ivan','Lan','ivann@gmail.com', 44564);
// let user5 = new User(5,'Mariana','Pann','marianaa@gmail.com', 57755);
// let user6 = new User(6,'Vlad','Vladov','vladd@gmail.com', 665686);
// let user7 = new User(7,'Marian','Palan','mariann@gmail.com', 768977);
// let user8 = new User(8,'Oksana','Ivanyk','oksanaa@gmail.com', 868088);
// let user9 = new User(9,'Petro','Petrov','petr@gmail.com', 996779);
// let user10 = new User(10,'Vasyl','Valov','vasyll10@gmail.com', 103310);
// users.push(user1, user2, user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(users);

// 2.Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// function User(id, name, surname , email, phone){
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
// }
// let users=[];
// let user1 = new User(1,'Olia','Ivanova','olyaa@gmail.com', 11791);
// let user2 = new User(2,'Ira','Petrova','iraa@gmail.com', 225792);
// let user3 = new User(3,'Oleh','Spepanov','olehh@gmail.com', 345733);
// let user4 = new User(4,'Ivan','Lan','ivann@gmail.com', 44564);
// let user5 = new User(5,'Mariana','Pann','marianaa@gmail.com', 57755);
// let user6 = new User(6,'Vlad','Vladov','vladd@gmail.com', 665686);
// let user7 = new User(7,'Marian','Palan','mariann@gmail.com', 768977);
// let user8 = new User(8,'Oksana','Ivanyk','oksanaa@gmail.com', 868088);
// let user9 = new User(9,'Petro','Petrov','petr@gmail.com', 996779);
// let user10 = new User(10,'Vasyl','Valov','vasyll10@gmail.com', 103310);
// users.push(user1, user2, user3,user4,user5,user6,user7,user8,user9,user10);
// let fiteredUser=users.filter(value => value.id%2===0);
// console.log(fiteredUser);

// 3.Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function User(id, name, surname , email, phone){
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
// }
// let users=[];
// let user1 = new User(7,'Olia','Ivanova','olyaa@gmail.com', 11791);
// let user2 = new User(3,'Ira','Petrova','iraa@gmail.com', 225792);
// let user3 = new User(5,'Oleh','Spepanov','olehh@gmail.com', 345733);
// let user4 = new User(15,'Ivan','Lan','ivann@gmail.com', 44564);
// let user5 = new User(12,'Mariana','Pann','marianaa@gmail.com', 57755);
// let user6 = new User(8,'Vlad','Vladov','vladd@gmail.com', 665686);
// let user7 = new User(11,'Marian','Palan','mariann@gmail.com', 768977);
// let user8 = new User(1,'Oksana','Ivanyk','oksanaa@gmail.com', 868088);
// let user9 = new User(77,'Petro','Petrov','petr@gmail.com', 996779);
// let user10 = new User(33,'Vasyl','Valov','vasyll10@gmail.com', 103310);
// users.push(user1, user2, user3,user4,user5,user6,user7,user8,user9,user10);
// let sortUser=users.sort(function (u1,u2){
//     return u1.id-u2.id
// });
// console.log(sortUser);

// 4.створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.phone=phone;
//         this.order=order;
//     }
// }
// let arrClient=[];
// let client1 = new Client(1,'Olia','Ivanova','olyaa@gmail.com', 11791,['milk','water']);
// let client2 = new Client(2,'Ira','Petrova','iraa@gmail.com', 225792,['juice','milk','water']);
// let client3 = new Client(3,'Oleh','Spepanov','olehh@gmail.com', 345733,['milk','water','chocolate']);
// let client4 = new Client(4,'Ivan','Lan','ivann@gmail.com', 44564,['chocolate','milk','water']);
// let client5 = new Client(5,'Mariana','Pann','marianaa@gmail.com', 57755,['milk','chocolate','water']);
// let client6 = new Client(6,'Vlad','Vladov','vladd@gmail.com', 665686,['milk','juice','water']);
// let client7 = new Client(7,'Marian','Palan','mariann@gmail.com', 768977,['milk','juice']);
// let client8 = new Client(8,'Oksana','Ivanyk','oksanaa@gmail.com', 868088,['milk','chocolate']);
// let client9 = new Client(9,'Petro','Petrov','petr@gmail.com', 996779,['chocolate','water']);
// let client10 = new Client(10,'Vasyl','Valov','vasyll10@gmail.com', 103310,['milk','chokolate','juice']);
// arrClient.push(client1,client2,client3,client4,client4,client5,client6,client7,client8,client9,client10);
// console.log(arrClient);

// 5.Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.(sort)
// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.phone=phone;
//         this.order=order;
//     }
// }
// let arrClient=[];
// let client1 = new Client(1,'Olia','Ivanova','olyaa@gmail.com', 11791,['milk','water']);
// let client2 = new Client(2,'Ira','Petrova','iraa@gmail.com', 225792,['juice','milk','water']);
// let client3 = new Client(3,'Oleh','Spepanov','olehh@gmail.com', 345733,['milk','water','juice','chocolate']);
// let client4 = new Client(4,'Ivan','Lan','ivann@gmail.com', 44564,['chocolate','milk','water']);
// let client5 = new Client(5,'Mariana','Pann','marianaa@gmail.com', 57755,['milk','chocolate','water']);
// let client6 = new Client(6,'Vlad','Vladov','vladd@gmail.com', 665686,['milk','juice','water']);
// let client7 = new Client(7,'Marian','Palan','mariann@gmail.com', 768977,['milk','juice']);
// let client8 = new Client(8,'Oksana','Ivanyk','oksanaa@gmail.com', 868088,['milk','chocolate']);
// let client9 = new Client(9,'Petro','Petrov','petr@gmail.com', 996779,['chocolate','water']);
// let client10 = new Client(10,'Vasyl','Valov','vasyll10@gmail.com', 103310,['milk','chokolate','juice']);
// arrClient.push(client1,client2,client3,client4,client4,client5,client6,client7,client8,client9,client10);
// let sortClient=arrClient.sort(function (a,b){
//     return a.order.length-b.order.length
// });
// console.log(sortClient);

// 6.Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model, producer, year, maxSpeed,volume,driver) {
// 	this.model = model;
// 	this.producer = producer;
// 	this.year = year;
// 	this.maxSpeed = maxSpeed;
// 	this.volume = volume;
//     this.driver=driver;
//  this.drive = function (){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	};
// 	this.info = function () {
// 		console.log(`model : ${this.model},producer : ${this.producer},year : ${this.year},maxSpeed : ${this.maxSpeed},
// 		volume: ${this.volume}`);
// 	};
// 	this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = newSpeed
//         return newSpeed
//     };
// 	this.changeYear = function (newValue){
//         this.year === newValue
//         return newValue
//     };
// 	this.addDriver = function (driver){
//         this.addDriver = driver;
//         return driver
//     }
// }
// let cars = new Car("Rogue","Nissan",2018, 240, 2.5,)
// console.log(cars);
// cars.drive();
// cars.info();
// console.log(cars.increaseMaxSpeed(280));
// console.log(cars.changeYear(2020));
// let driver = {name:"Ivan Ivanovych", age : 33};
// console.log(driver);

// 7.Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
//     constructor(model, producer, year, maxSpeed,volume) {
//         this.model = model;
//         this.producer = producer;
// 	    this.year = year;
// 	    this.maxSpeed = maxSpeed;
// 	    this.volume = volume;
//     }
//     drive(){
//         console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
//     };
//     info()
//     {
//         console.log(`model : ${this.model},manufacturer : ${this.manufacturer},year : ${this.year},maxSpeed : ${this.maxSpeed},
//         volumeEngine : ${this.volumeEngine},shasher : ${this.shasher}`);
//     };
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = newSpeed;
//         return newSpeed
//     };
//     changeYear(newValue){
//         this.year = newValue;
//         return newValue
//     };
//     addDriver(driver){
//         this.shasher = driver;
//         return driver
//     };
// };
// let cars = new Car("Rogue","Nissan",2018, 240, 2.5,)
// console.log(cars);
// cars.drive();
// cars.info();
// console.log(cars.increaseMaxSpeed(280));
// console.log(cars.changeYear(2020));
// let driver = {name:"Ivan Ivanovych", age : 33};
// console.log(driver);

// 8.створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Popeliushka{
//     constructor(name, age,size) {
//         this.name=name;
//         this.age=age;
//         this.size=size;
//     }
// }
// let arrPop=[
//     new Popeliushka('Yulia',33,36);
//     new Popeliushka('Anna',30,38);
//     new Popeliushka('Lana',20,35);
//     new Popeliushka('Nana',18,36);
//     new Popeliushka('Nika',25,37);
//     new Popeliushka('Mariana',11,38);
//     new Popeliushka('Maria',15,38);
//     new Popeliushka('Inga',22,37);
//     new Popeliushka('Sveta',17,36);
//     new Popeliushka('Olia',28,37);
// ]
// console.log(arrPop);
// class Prince{
//     constructor(name, age,tufelca) {
//         this.name=name;
//         this.age=age;
//         this.tufelca=tufelca;
//     }
// }
// let prince=new Prince('Ivan',30,35);
// console.log(prince)
// for (let i = 0; i < arrPop.length; i++) {
//    if (prince.tufelca===arrPop[i].size){
//        console.log(arrPop[i])
//    }
// }
// let para=arrPop.find(value => {
//     if (value.size === arrPop.)
//         }
// })
// ??????????????????????????????????????








