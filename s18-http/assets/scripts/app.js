const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
    // const promise = new Promise((resolve, reject) => {
        // const xhr = new XMLHttpRequest();
        // xhr.setRequestHeader('Content-Type', 'application/json');
        
    //     xhr.open(method, url);
        
    //     xhr.responseType = 'json';
        
    //     xhr.onload = function() {b ,
    //         if (xhr.status >= 200 && xhr.status < 300) {
    //             resolve(xhr.response);
    //         } else {
    //             reject(new Error('Something went wrong!'));
    //         }
    //     };

    //     xhr.onerror = function() {
    //         reject(new Error('Failed to send request!'));
    //     }
        
    //     xhr.send(JSON.stringify(data));
    // });
    // return promise;

    // fetch is a promise, default method is 'GET'
    return fetch(url, {
        method: method,
        // body: JSON.stringify(data),
        body: data, // <= FormData
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    }).then(response => {
        // response.json() returns a promise
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then(errData => {
                console.log(errData);
                throw new Error('Something went wrong - server-side.');
            });
        }
    })
    .catch(error => {
        console.log(error);
        throw new Error('Something went wrong!');
    });
}

function fetchPosts() {
    // sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(responseData => {
        // const listOfPosts = responseData;
        // console.log(listOfPosts);
        // for (const post of listOfPosts) {
        //     const postEl = document.importNode(postTemplate.content, true);
        //     postEl.querySelector('h2').textContent = post.title.toUpperCase();
        //     postEl.querySelector('p').textContent = post.body;
        //     postEl.querySelector('li').id = post.id;
        //     listElement.append(postEl);
        // }
    // })
    // .catch(error => {
    //     alert(error.message);
    // });

    axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    ).then(response => {
        const listOfPosts = response.data;
        console.log(listOfPosts);
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    })
    .catch(error => {
        alert(error.message);
        console.log(error.response);
    });
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    }

    const fd = new FormData(form);
    // fd.append('title', title);
    // fd.append('body', content);
    fd.append('userId', userId);

    // sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);

    // sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    console.log(response);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        // sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});