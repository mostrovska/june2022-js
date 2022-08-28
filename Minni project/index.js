// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
//     котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            let {id, name} = user;
            let div = document.getElementById('users_div');
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');

            userDiv.innerHTML = `<h2>${id} - ${name}</h2>`

            let userBtn = document.createElement('button');
            userBtn.id = 'user_btn';
            userBtn.innerText = 'User details';
            userBtn.onclick = function () {
                localStorage.setItem('details', JSON.stringify(user));
                window.location.href = 'user_details.html?id=' +id;
            }
            userDiv.append(userBtn);
            div.appendChild(userDiv);
        }
    });