// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
let detailsKey = 'details';
let userInfo = JSON.parse(localStorage.getItem(detailsKey));

let postsTitleDiv = document.createElement('div');
postsTitleDiv.classList.add('post_title_div');

let userDiv = document.createElement('div');
userDiv.classList.add('user_div');

let user = document.createElement('div');
user.classList.add('user');
user.innerHTML = `
<h4>ID: ${userInfo.id}</h4>
<h4>Name: ${userInfo.name}</h4>
<p>Username: ${userInfo.username}</p>
<p>Email: ${userInfo.email}</p>
<h4>Address: </h4>
<p>Street - ${userInfo.address.street}</p>
<p>City - ${userInfo.address.city}</p>
<p>Zipcode - ${userInfo.address.zipcode}</p>
<p>Geo: lat - ${userInfo.address.geo.lat}; lng - ${userInfo.address.geo.lng}</p>
<p>Phone: ${userInfo.phone}</p>
<p>Website: ${userInfo.website}</p>
<h4>Company: </h4>
<p>Name: ${userInfo.company.name}</p>
<p>CatchPhrase: ${userInfo.company.catchPhrase}</p>
<p>Bs: ${userInfo.company.bs}</p>`;

let userPostBtn = document.createElement('button');
userPostBtn.id = 'user_post_btn';
userPostBtn.innerText = 'Post of current user';
userPostBtn.onclick = function (e) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userInfo.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (let post of posts) {
                let postTitle = document.createElement('p');
                postTitle.innerText = `${post.title}`;

                let postContainer = document.createElement('div');
                postContainer.classList.add('posts_title_container');

                let postDetailsBtn = document.createElement('button');
                postDetailsBtn.id = 'post_details_btn';
                postDetailsBtn.innerText = 'Post details';
                postDetailsBtn.onclick = function (e) {
                    localStorage.setItem('postDetails', JSON.stringify(post));
                    window.location.href = 'post_details.html?id=' +post.id;
                }
                postContainer.append(postTitle, postDetailsBtn);
                postsTitleDiv.append(postContainer);
            }
        });
}

userDiv.append(user, userPostBtn)
document.body.append(userDiv, postsTitleDiv);