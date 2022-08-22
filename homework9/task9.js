// 1.є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// let members=document.getElementsByClassName('member')[0];
// for (let member of simpsons) {
//     let div=document.createElement('div');
//     div.classList.add('member');
//     div.innerHTML= `<h1>${member.name}  ${member.surname}</h1>
//    <h2>Age - ${member.age}</h2>
//     <p>${member.info}</p>`;
//     document.body.appendChild(div);
//     let img=document.createElement("img");
//     img.src=member.photo;
//     div.appendChild(img);
//
// }


// 2.Цикл в циклі
// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// for (let course of coursesArray) {
//     let div=document.createElement('div');
//     div.innerText=`${course.title}
//     ${course.monthDuration} ${course.hourDuration}
//     ${course.modules}`;
//     document.body.appendChild(div);
//
// }
// for (let course of coursesArray) {
//     let title=document.createElement('div');
//     title.classList.add('title');
//     title.innerText=course.title;
//     document.body.appendChild(title);
//
//     let monthDuration =document.createElement('div');
//     monthDuration.classList.add('monthDuration');
//     monthDuration.innerText=course.monthDuration;
//     document.body.appendChild(monthDuration);
//
//     let hourDuration=document.createElement('div');
//     hourDuration.classList.add('hourDuration');
//     hourDuration.innerText=course.hourDuration;
//     document.body.appendChild(hourDuration);
//
//     let modules=document.createElement('div');
//     modules.classList.add('modules');
//     modules.innerText=course.modules;
//     document.body.appendChild(modules);
// }
// ?????????????????????????????

// 3.Cтворити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div=document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// div.style.background='blue';
// div.style.color='red';
// div.style.fontSize='30px';
// document.body.appendChild(div);
// document.body.appendChild(div.cloneNode(true));


// 4.Є масив:
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його
// до блоку .menu Завдання робити через цикли.
// let array=['Main','Products','About us','Contacts'];
// let menu=document.getElementsByClassName('menu')[0];
// for (let item of array) {
//     let li=document.createElement('li');
//     li.innerText=item;
//     menu.appendChild(li);
// }


// 5.Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let course of coursesAndDurationArray) {
//     let divElement=document.createElement('div');
//     divElement.innerText=`${course.title} - ${course.monthDuration}`;
//     document.body.appendChild(divElement);


// 6.Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
//     з title  елементу, та <p class='description'> з monthDuration елементу.  Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let course of coursesAndDurationArray) {
// let divElement=document.createElement('div');
// let h1=document.createElement('h1');
// h1.innerText=course.title;
// let p=document.createElement('p');
// p.innerText=course.monthDuration;
// divElement.appendChild(h1);
// divElement.appendChild(p);
// document.body.appendChild(divElement);
// }


// 7.Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".
// 1
// document.getElementById('button').onclick=function (){
//     document.getElementById('text').hidden=true;
// }
// 2
// let clik=document.getElementById('text');
// let button=document.getElementById('button');
// button.onclick=function (){
//     clik.style.display='none';
// }


// 8.створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// document.getElementById('button1').onclick=function (){
//     let age=document.getElementById('age').value;
//     if (age<18){
//         alert('Вибачте, ваш вік малий');
//     }else {
//         alert('Вітаємо на сайті');
//     }
//
// }


// 9.Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// document.forms.f1.NumberR.oninput=function (e){
//     // let number=this.NumberR.value;
//     // e.preventDefault();
//     // for (let i = 1; i <=number; i++) {
//     //     console.log(number)
//     // }
//   ????????????????????



















