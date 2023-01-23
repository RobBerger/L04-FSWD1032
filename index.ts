interface nameInterface {
    name: string;
}

function namePrint(givenObject: nameInterface){
    console.log(givenObject.name);
}

let myObject = { name: "Elmo", address: "123 Sesame St." };
namePrint(myObject);