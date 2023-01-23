"use strict";
// interface nameInterface {
//     name: string;
//     prettyPrint(): void;
// }
function useSquare(mySquare) {
    let message = "The ";
    if (mySquare.color) {
        message += `${mySquare.color} `;
    }
    message += `square has a perimeter of ${mySquare.length * 4}`;
    return message;
}
console.log(useSquare({ length: 3, color: 'red' }));
console.log(useSquare({ length: 5 }));
