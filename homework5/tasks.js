// 1. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s(a,b){
//    let res=a*b
//     return res
// }
// console.log(s(10,10))
// let res=(a,b)=>a*b
// console.log(res(10,10))

// 2. створити функцію яка обчислює та повертає площу кола з радіусом r
// function colo(r){
//     let radius=r*2
//     let res=r*3.14
//     return res
// }
// console.log(colo(5))

// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function tsylindr(h,r,s){
//     let res=2*r+2*r*h
//     return res
// }
// console.log(tsylindr(2,4,8))

// 4. створити функцію яка приймає масив та виводить кожен його елемент
// let array=['text',33,true,55,'hello'];
// function masArray(x){
//     for (let i = 0; i < x.length; i++) {
//         let x1 = x[i];
//         console.log(x[i]);
//     }
// }
// masArray(array);

// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(text){
//     document.write(`<p>${text}</p>`);
// }
// paragraf(`Hello`);
// paragraf(`Okten`);
// paragraf(`School`);
// paragraf(`Name`);
// paragraf(`You`);

// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function name(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`);
// }
// name('hello');

// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function array (text,number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// array('hello',15);

// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array=['text',33,-55,'car',true];
// function masArray(element) {
//     document.write(`<ul>`)
//     for ( let i = 0; i < element.length; i++) {
//         document.write(`<li>${element[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// masArray(array);

// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {id: 33, name: 'vasya', age: 31},
//     {id: 23, name: 'petya', age: 30},
//     {id: 77, name: 'kolya', age: 29},
//     {id: 12, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 254, name: 'anya', age: 31},
//     {id: 56, name: 'oleg', age: 28},
//     {id: 78, name: 'andrey', age: 29},
//     {id: 22, name: 'masha', age: 30},
//     {id: 15, name: 'olya', age: 31},
//     {id: 17, name: 'max', age: 31}
// ];
//
// function masUsers(array) {
//     for (let arrayElement of array) {
//         document.write(`<div>id-${arrayElement.id}</div>
//                         <div>name-${arrayElement.name}</div>
//                         <div>age-${arrayElement.age}</div>`);
//     }
// }
// masUsers(users)

// 10. створити функцію яка повертає найменьше число з масиву
// let array=[7.15,33,0,-5,38,55];
// let minNumber=(arr)=>{
//     let min=arr[0];
//     for (let elem of array) {
//         if (min>elem) {
//          min=elem
//         }
//     }
//     return min;
// }
// console.log(minNumber(array));

// 11. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let mas=[3,15,2];
// function sumMas(array){
//     let a=0;
//     for (let arrayElement of array) {
//         a+=arrayElement
//     }
//     return a
// }
// console.log(sumMas(mas));


