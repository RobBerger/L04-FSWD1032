// interface nameInterface {
//     name: string;
//     prettyPrint(): void;
// }

// function namePrint(givenObject: nameInterface){
//     console.log(givenObject.name);
// }

// let myObject = {
//     name: "Elmo", address: "123 Sesame St.",
//     prettyPrint: function() {
//         console.log(`Name: ${this.name}`);
//     }
//     };

//     function buildName(givenObject: nameInterface) {
//         givenObject.prettyPrint();
//     }
    
//     buildName(myObject);

interface Square {
    length: number;
    color?: string;
}

function useSquare(mySquare: Square): string {
    let message = "The ";

    if (mySquare.color) {
        message += `${mySquare.color} `;
    }

    message += `square has a perimeter of ${mySquare.length * 4}`;

    return message;
}

console.log(useSquare({ length: 3, color: 'red' }));
console.log(useSquare({ length: 5 }));