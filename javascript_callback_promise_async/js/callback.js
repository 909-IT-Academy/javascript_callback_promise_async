  // Call back function
  $names = ["Dibesh", "Andy", "Hari"];

  function fullName($arr, cbFn){
    for(let index = 0; index < $arr.length; index++){
        document.write($arr[index]+" "+addSurname('Sharma')+"<br/>");
    }
  }

  function addSurname($surname){
    return $surname;
  }

  fullName($names, addSurname);