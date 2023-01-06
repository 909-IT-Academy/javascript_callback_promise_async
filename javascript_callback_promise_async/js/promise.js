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



