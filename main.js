/* Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice */

const doc = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty, 
        address: address
    }
}
/*
Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels
*/


const createDog = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

const BowWowKennels = [];

const gus = createDog("Gus", "blue heeler")
BowWowKennels.push(gus)

const zam = createDog("Zam", "lab")
BowWowKennels.push(zam)

const moose = createDog("Moose", "gsp")
BowWowKennels.push(moose)

console.log(BowWowKennels);