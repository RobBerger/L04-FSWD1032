"use strict";
// interface nameInterface {
//     name: string;
//     prettyPrint(): void;
// }
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
function buildCar(car) {
    console.log(`Building a ${car.getCarType()}`);
}
buildCar(myCar);
