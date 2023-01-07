let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise1.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
);


let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
);

var promise3 = new Promise(function(resolve, reject){
    let a = 3 + 4;
    if(a == 12){
        resolve('success')
    } else {
        reject('failed')
    }
})

promise3.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
);

// promise3.then((data) => {
//     alert('test')
// }).catch((data)=>{console.log(data)});

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Tow', body: 'This is post tow'}
]

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }
            else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

createPost({ title: 'Post There', body: 'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err));

const promise4 = Promise.resolve('Hello World');
const promise5 = 10;
const promise6 = new Promise((resolve, rejetct) => setTimeout(resolve, 2000, 'Goodbye'));
const promise7 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

Promise.all([promise4, promise5, promise6, promise7]).then(values => console.log(values));

