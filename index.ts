function namePrint(givenObject: { name: string }){
    console.log(givenObject.name);
}

let myObject = { name: "Elmo", address: "123 Sesame St." };
namePrint(myObject);