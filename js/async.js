const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// Call Back
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}



createPost({
    title: 'Post Three', body: 'This is post three'
}, getPosts);

// Promise
// function createPost(post) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             posts.push(post);

//             const error = false;

//             if(!error) {
//                 resolve();
            
//             } else {
//                 reject('Error something went wrong')
//             }
//         }, 2000);
//     })
        
// }
// createPost({
//         title: 'Post Three', body: 'This is post three'
//     }).then(getPosts);


// Async / Await
// async function init() {
//     await createPost({ 
//         title: 'Post Three', body: 'This is post thrree'
//     });
//     getPosts();
// }
// init();


// // Async / Await / Fetch
// async function fetchUsers(){
//     ('https://jsonplaceholder.typicode.com/users');
    
//     const data = await resizeBy.json();

//     console.log(data);
// }
// fetchUsers();
