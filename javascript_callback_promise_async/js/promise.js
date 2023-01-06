// https://www.youtube.com/watch?v=DHvZLI7Db8E

var promise1 = new Promise(function (resolve, reject) {
    // executor (the producing code, "singer")
    let a = 1 + 1;
    if (a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
});

promise1.then((data) => { console.log(data) }).catch((data) => { console.log(data) }); // success

var promise2 = new Promise(function (resolve, reject) {
    // executor (the producing code, "singer")
    let a = 1 + 4;
    if (a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
});

promise2.then((data) => { console.log(data) }).catch((data) => { console.log(data) }); // failed

let myPromise = new Promise(function(myResolve, myReject) {
    $name = "";
    $.ajax({
        url: "https://catfact.ninja/fact",
        method :"GET",
        data:{name : $name},
        dataType:"JSON",
        success:function(data)
        {
            myResolve(data);
            console.log(data);
        },
        error: function (error) {
            myReject(error);
            window.error = error;
        }
      });

  });
  
  myPromise.then(
    function(value) {myDisplayer(value.fact);},
    function(error) {myDisplayer(error.statusText);}
  );
  
  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }


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

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, rejetct) => setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));



