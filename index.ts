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

// interface Square {
//     length: number;
//     color?: string;
// }

// function useSquare(mySquare: Square): string {
//     let message = "The ";

//     if (mySquare.color) {
//         message += `${mySquare.color} `;
//     }

//     message += `square has a perimeter of ${mySquare.length * 4}`;

//     return message;
// }

// console.log(useSquare({ length: 3, color: 'red' }));
// console.log(useSquare({ length: 5 }));

interface CarInterface {
    make: string;
    model: string;
    numDoors: number;
    seatingCapacity: number;
    chargeCapacity?: number;

    getCarType(): string;
    getChargeLevel?(): number;
}

let myCar = {
    make: 'Honda',
    model: 'Civic',
    numDoors: 4,
    seatingCapacity: 5,
    gasMileage: 20,

    getCarType: function () {
        return `${this.make} ${this.model}`;
    }
};

function buildCar(car: CarInterface): void {
    console.log(`Building a ${car.getCarType()}`);
}

buildCar(myCar);