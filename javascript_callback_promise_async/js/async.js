async function myFunction() {
    $names = ["Dibesh", "Andy", "Hari"];
    return $names;
}

myFunction().then(
  function (value) {
    console.log(value[0]);
    myDisplayer(value[0]);
  },
  function (error) {
    myDisplayer(error);
  }
);

function myDisplayer(data) {
  document.getElementById("demo").innerHTML = data;
}

function myDisplayer_1(data) {
    document.getElementById("demo_1").innerHTML = data;
  }

async function myFunction_1() {
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
                window.dataError = error;
            }
          });
      });

      myPromise.then(
        function(value) {myDisplayer_1(value.fact);},
        function(error) {myDisplayer_1(error.statusText);}
      );

      document.getElementById("demo_2").innerHTML = await myPromise;
}

myFunction_1();


