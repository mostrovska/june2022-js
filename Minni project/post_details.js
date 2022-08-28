// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.
let postDetailsKey = 'postDetails';
let postInfo = JSON.parse(localStorage.getItem(postDetailsKey));

let postDiv = document.createElement('div');
postDiv.classList.add('post_div');

let post = document.createElement('div');
post.classList.add('post');
post.innerHTML = `
<h4>UserID: ${postInfo.userId}</h4>
<h4>ID: ${postInfo.id}</h4>
<h4>Title: ${postInfo.title}</h4>
<p>Body: ${postInfo.body}</p>`;

let allCommentsDiv = document.createElement('div');
allCommentsDiv.classList.add('comments_div');

let userCommentsBtn = document.createElement('button');
userCommentsBtn.id = 'comments_details_btn';
userCommentsBtn.innerText = 'Show all comments';
userCommentsBtn.onclick = function (e) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postInfo.id}/comments`)
        .then(response => response.json())
        .then(comments => {
            for (let comment of comments) {
                let commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `
                <h4>PostId: ${comment.postId}</h4>
                <h4>ID: ${comment.id}</h4>
                <h4>name: ${comment.name}</h4>
                <p>Email: ${comment.email}</p>
                <p>Body: ${comment.body}</p>`;

                document.body.appendChild(commentDiv);
                allCommentsDiv.append(commentDiv);
            }
        });
}

postDiv.append(post);
post.append(userCommentsBtn);
document.body.append(postDiv, allCommentsDiv);