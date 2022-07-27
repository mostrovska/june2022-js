let mas = ['name', 33, 'hello', true, 'age', 12.5, 999, 'title', false, 'small'];
console.log(mas);
console.log(mas[0]);
console.log(mas[1]);
console.log(mas[2]);
console.log(mas[3]);
console.log(mas[4]);
console.log(mas[5]);
console.log(mas[6]);
console.log(mas[7]);
console.log(mas[8]);
console.log(mas[9]);

let book1 = {
    title: 'Hary Potter and the Chamber of secrets',
    pageCount: 352,
    genre: 'fantasy'
};
console.log(book1);
let book2 = {
    title: 'Zakhar Berkut',
    pageCount: 256,
    genre: 'history'
};
console.log(book2);
let book3 = {
    title: 'A woman with a plan',
    pageCount: 224,
    genre: 'psychology'
};
console.log(book3);

let firstBook = {
    title: 'Hary Potter',
    pageCount: 352,
    genre: 'fantasy',
    author: [
        {
            name: 'Dzhoan Roulinh',
            age: 57

        }
    ]
};
console.log(firstBook);
console.log(firstBook.author);

let secondBook = {
    title: 'The Choice',
    pageCount: 400,
    genre: 'history',
    author: [
        {
            name: 'Eva Eher',
            age: 65
        }
    ]
};
console.log(secondBook);
console.log(secondBook.author);

let thirdBook = {
    title: 'The Knowledge Illusion',
    pageCount: 344,
    genre: 'psychology',
    author: [
        {
            name: 'Stiven slomen',
            age: 48
        }
    ]
};
console.log(thirdBook);
console.log(thirdBook.author);

let user = [
    {
        name: 'Mariana', username: 'Meri', password: 3456
    },
    {
        name: 'Maria', username: 'Meri', password: 6789
    },
    {
        name: 'Oleh', username: 'Olikk', password: 1369
    },
    {
        name: 'Ivan', username: 'Vann', password: 6709
    },
    {
        name: 'Oksana', username: 'Ksen', password: 5588
    },
    {
        name: 'Petro', username: 'Petr', password: 9855
    },
    {
        name: 'Nikita', username: 'Nikk', password: 3393
    },
    {
        name: 'Stepan', username: 'Sttp', password: 3313
    },
    {
        name: 'Iryna', username: 'Irin', password: 7877
    },
    {
        name: 'Dania', username: 'Den', password: 7333
    }
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);