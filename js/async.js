// Example : async functions
async function myFunction(){
    $names = ["Narayan", "Ruja", "Laxmi"];
    return $names;
}

myFunction().then(
    function(value){
        displayVal(value[0])
    },
    function(error){
        displayVal(error)
    },
)

function displayVal(data){
    //document.write(data+"<br/>");
    document.getElementById("demo1").innerHTML = data;
}

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
        document.getElementById("demo2").innerHTML = output;
        //document.body.innerHTML = output;
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