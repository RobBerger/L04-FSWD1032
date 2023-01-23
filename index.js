"use strict";
function namePrint(givenObject) {
    console.log(givenObject.name);
}
let myObject = {
    name: "Elmo", address: "123 Sesame St.",
    prettyPrint: function () {
        console.log(`Name: ${this.name}`);
    }
};
function buildName(givenObject) {
    givenObject.prettyPrint();
}
buildName(myObject);
