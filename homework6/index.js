// 1.Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str='hello world';
// console.log(str.length);
// let str='lorem ipsum';
// console.log(str.length);
// let str='javascript is cool';
// console.log(str.length);

// 2.Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str='hello world';
// console.log(str.toUpperCase());
// let str='lorem ipsum';
// console.log(str.toUpperCase());
// let str='javascript is cool';
// console.log(str.toUpperCase());

// 3.Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str='HELLO WORLD';
// console.log(str.toLowerCase());
// let str='LOREM IPSUM';
// console.log(str.toLowerCase());
// let str='JAVASCRIPT IS COOL';
// console.log(str.toLowerCase());

// 4.Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ' ;
// console.log(str.trim());

// 5.Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// function stringToarray(str){
//     let split =str.split(' ');
//     return split
// }
// console.log(stringToarray(str));
// let spit=str.split(' ');
// console.log(spit)

// 6.є масив чисел [10,8,-7,55,987,-1011,0,1050,0].за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr=[10,8,-7,55,987,-1011,0,1050,0];
// let str=arr.map(String);
// console.log(str);

// 7.створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNumsAscending = nums.sort(function (a,b) {
//     return a - b;
// });
// console.log(sortNumsAscending);
// let sortNumsDescending=nums.sort(function (a,b){
//     return b-a;
// });
// console.log(sortNumsDescending);

// 8.є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortCourses=coursesAndDurationArray.sort(function (a,b){
//     return b.monthDuration-a.monthDuration;
// });
// console.log(sortCourses);
// let filterCourses=coursesAndDurationArray.filter(value => value.monthDuration>5);
// console.log(filterCourses);

// 9.описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// let cards = [
//     {cardSuit: 'clubs', value: '6', color:'black'},
//     {cardSuit: 'clubs', value: '7', color:'black'},
//     {cardSuit: 'clubs', value: '8', color:'black'},
//     {cardSuit: 'clubs', value: '9', color:'black'},
//     {cardSuit: 'clubs', value: '10', color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//
//     {cardSuit: 'diamonds', value: '6', color:'red'},
//     {cardSuit: 'diamonds', value: '7', color:'red'},
//     {cardSuit: 'diamonds', value: '8', color:'red'},
//     {cardSuit: 'diamonds', value: '9', color:'red'},
//     {cardSuit: 'diamonds', value: '10', color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//
//     {cardSuit: 'hearts', value: '6', color:'red'},
//     {cardSuit: 'hearts', value: '7', color:'red'},
//     {cardSuit: 'hearts', value: '8', color:'red'},
//     {cardSuit: 'hearts', value: '9', color:'red'},
//     {cardSuit: 'hearts', value: '10', color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {value: 'Joker', color:'red'},
//
//     {cardSuit: 'spades', value: '6', color:'black'},
//     {cardSuit: 'spades', value: '7', color:'black'},
//     {cardSuit: 'spades', value: '8', color:'black'},
//     {cardSuit: 'spades', value: '9', color:'black'},
//     {cardSuit: 'spades', value: '10', color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {value: 'Joker', color:'black'},
// ];
// - знайти піковий туз
// let filterSpadesAce=cards.filter(card=>card.cardSuit==='spades' && card.value==='Ace');
// console.log(filterSpadesAce);
// - всі шістки
// let filterCardSix=cards.filter(card=>card.value==='6');
// console.log(filterCardSix);
// - всі червоні карти
// let filterCardRed=cards.filter(card=>card.color==='red');
// console.log(filterCardRed);
// - всі буби
// let filterCardClubs=cards.filter(card=>card.cardSuit==='clubs');
// console.log(filterCardClubs);
// - всі трефи від 9 та більше
// ??????????????????????????????
// let filterCardTref=cards.filter( card => card.cardSuit==='clubs'&& card.value>9+'' );
// console.log(filterCardTref);

// 10.Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// let reduce=cards.reduce((accum,card)=>{
//     if (card.cardSuit==='clubs'){
//         accum.clubs.push(card);
//     }
//     if (card.cardSuit==='diamonds'){
//         accum.diamonds.push(card);
//     }
//     if (card.cardSuit==='hearts'){
//         accum.hearts.push(card);
//     }
//     if (card.cardSuit==='spades'){
//         accum.spades.push(card);
//     }
//     return accum;
// },{clubs:[], diamonds:[], hearts:[], spades:[]});
// console.log(reduce);






















