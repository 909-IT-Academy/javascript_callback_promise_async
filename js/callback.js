// Example : callback functions
$names = ["Narayan", "Ruja", "Laxmi"];
$surname = ["Kandel", "Subba", "Thapa"];

function fullName($arr, cbFn){
    for(let index=0; index < $arr.length; index++){
        document.write($arr[index] + " "+addSurname("Shrestha")+"<br/>");
    }
}

function addSurname($surName){
    return $surName;
}

fullName($names, addSurname);